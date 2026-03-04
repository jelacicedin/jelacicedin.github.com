#!/usr/bin/env ruby

require 'net/http'
require 'json'
require 'uri'
require 'nokogiri'
require 'date'
require 'fileutils'

# Usage: ruby scripts/generate_book.rb <goodreads_url_or_id> [status] [description]
# Examples:
#   ruby scripts/generate_book.rb 214463640
#   ruby scripts/generate_book.rb https://www.goodreads.com/book/show/214463640
#   ruby scripts/generate_book.rb 214463640 Reading "A great book about..."

if ARGV.empty?
  puts "Usage: ruby scripts/generate_book.rb <goodreads_id_or_url> [status] [description]"
  puts ""
  puts "Examples:"
  puts "  ruby scripts/generate_book.rb 214463640"
  puts "  ruby scripts/generate_book.rb https://www.goodreads.com/book/show/214463640"
  puts "  ruby scripts/generate_book.rb 214463640 Reading 'A book about AI'"
  exit 1
end

# Parse input
input = ARGV[0]
status = ARGV[1] || "Reading"
description = ARGV[2] || ""

# Extract book ID from URL or use directly
book_id = if input.include?('goodreads.com')
            input.match(/show\/(\d+)/)[1]
          else
            input
          end

puts "Fetching book data for Goodreads ID: #{book_id}..."

# Scrape Goodreads
url = "https://www.goodreads.com/book/show/#{book_id}"
uri = URI(url)

begin
  response = Net::HTTP.get_response(uri)
  html = response.body
  doc = Nokogiri::HTML(html)

  # Extract metadata
  title = doc.css('h1[data-testid="bookTitle"]').text.strip
  title = doc.css('h1').first.text.strip if title.empty?

  # Author
  author = doc.css('[data-testid="author"]').text.strip
  author = doc.css('.ContributorLink').first&.text&.strip if author.empty?

  # Publication year
  pub_year_raw = doc.css('[data-testid="publicationInfo"]').text
  pub_year = pub_year_raw.match(/(\d{4})/)&.[](1) || Date.today.year.to_s

  # Get cover image URL
  cover_url = doc.css('img[alt*="cover"]').first&.attr('src')
  cover_url = doc.css('.BookCover__image img').first&.attr('src') if !cover_url || cover_url.empty?
  if cover_url && !cover_url.empty?
    cover_url = "https:#{cover_url}" if cover_url.start_with?('//')
  end

  # Get book description/abstract
  description = doc.css('[data-testid="description"]').text.strip
  description = doc.css('.BookDetails__description').text.strip if description.empty?
  # Clean up the description
  description = description.gsub(/\s+/, ' ').strip

  # Truncate at nearest dot if longer than 200 characters
  if description.length > 200
    truncated = description[0...200]
    dot_index = truncated.rindex('.')
    if dot_index
      description = truncated[0..dot_index]
    else
      # If no dot found in first 200 chars, find the nearest dot after 200
      next_dot = description.index('.', 200)
      description = if next_dot
                      description[0..next_dot]
                    else
                      truncated + '...'
                    end
    end
  end

  # Add quotation marks and attribution
  description = "\"#{description}\"\n\n*Abstract from Goodreads*"

  puts "✓ Title: #{title}"
  puts "✓ Author: #{author}"
  puts "✓ Year: #{pub_year}"
  puts "✓ Description: #{description[0...200]}..." if description.length > 200
  puts "✓ Cover URL: #{cover_url}" if cover_url && !cover_url.empty?

  if title.empty? || author.empty?
    puts "ERROR: Could not fetch book data. Check the Goodreads ID and try again."
    exit 1
  end

  # Generate filename
  filename = title.downcase
                  .gsub(/[^a-z0-9\s-]/, '')
                  .gsub(/\s+/, '_')
                  .gsub(/-+/, '_')
  filename = filename[0...50] # limit length

  # Download cover image if available
  cover_path = nil
  if cover_url && !cover_url.empty?
    begin
      cover_filename = "#{filename}.jpg"
      cover_dir = File.join(__dir__, '..', 'assets', 'img', 'book_covers')
      FileUtils.mkdir_p(cover_dir) unless Dir.exist?(cover_dir)
      cover_path = File.join(cover_dir, cover_filename)

      # Download the image
      cover_uri = URI(cover_url)
      http = Net::HTTP.new(cover_uri.host, cover_uri.port)
      http.use_ssl = cover_uri.scheme == 'https'
      request = Net::HTTP::Get.new(cover_uri.request_uri)
      request['User-Agent'] = 'Mozilla/5.0'
      response = http.request(request)

      if response.code == '200'
        File.write(cover_path, response.body)
        cover_path = "assets/img/book_covers/#{cover_filename}"
        puts "✓ Downloaded cover to #{cover_path}"
      else
        puts "⚠ Could not download cover (HTTP #{response.code})"
        cover_path = nil
      end
    rescue => e
      puts "⚠ Failed to download cover: #{e.message}"
      cover_path = nil
    end
  else
    puts "⚠ No cover image found"
  end

  # Today's date for the post
  today = Date.today.strftime('%Y-%m-%d')

  # Sanitize title and author for YAML (escape quotes and quote the values)
  yaml_title = title.gsub('"', '\"')
  yaml_author = author.gsub('"', '\"')

  # Create markdown content
  content = <<~MARKDOWN
    ---
    layout: book-review
    title: "#{yaml_title}"
    author: "#{yaml_author}"
    categories:
    tags: technical-reading
    #{cover_path ? "cover: #{cover_path}\n" : ""}buy_link: https://www.goodreads.com/book/show/#{book_id}
    goodreads_review: #{book_id}
    date: #{today}
    started: #{today}
    released: #{pub_year}
    status: #{status}
    ---

    #{description}
  MARKDOWN

  # Write file
  file_path = File.join(__dir__, '..', '_books', "#{filename}.md")

  # Check if file exists
  if File.exist?(file_path)
    puts "WARNING: File already exists at #{file_path}"
    print "Overwrite? (y/n): "
    overwrite = STDIN.gets.chomp.downcase
    exit 1 unless overwrite == 'y'
  end

  File.write(file_path, content)
  puts "✓ Created: #{file_path}"
  puts ""
  puts "Next steps:"
  puts "1. Add a description to the file if desired"
  puts "2. Add an Amazon buy_link if available"
  puts "3. Add categories and tags as needed"

rescue => e
  puts "ERROR: Failed to fetch book data"
  puts "#{e.class}: #{e.message}"
  puts ""
  puts "Make sure:"
  puts "1. The Goodreads ID is correct"
  puts "2. You have internet connection"
  puts "3. The book exists on Goodreads"
  exit 1
end

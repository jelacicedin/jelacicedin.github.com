// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-licentiate",
          title: "licentiate",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/licentiate/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/bookshelf/";
          },
        },{id: "nav-people",
          title: "people",
          description: "My supervisors and collaborators",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "books-extreme-ownership-how-u-s-navy-seals-lead-and-win",
          title: 'Extreme Ownership: How U.S. Navy SEALs Lead and Win',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/extreme_ownership_how_us_navy_seals_lead_and_win/";
            },},{id: "books-the-global-minotaur-america-the-true-origins-of-the-financial-crisis-and-the-future-of-the-world-economy-economic-controversies-2nd-2nd-edition-by-varoufakis-yanis-2013-paperback",
          title: 'The Global Minotaur: America, the True Origins of the Financial Crisis and the...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_global_minotaur_america_the_true_origins_of_th/";
            },},{id: "books-natural-language-processing-with-transformers-building-language-applications-with-hugging-face",
          title: 'Natural Language Processing with Transformers: Building Language Applications with Hugging Face',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/natural_language_processing_with_transformers_buil/";
            },},{id: "books-technofeudalism-what-killed-capitalism",
          title: 'Technofeudalism: What Killed Capitalism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/technofeudalism_what_killed_capitalism/";
            },},{id: "books-zelena-svjetla",
          title: 'Zelena svjetla',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/zelena_svjetla/";
            },},{id: "books-conflict-the-evolution-of-warfare-from-1945-to-ukraine-understanding-modern-warfare-today",
          title: 'Conflict: The Evolution of Warfare from 1945 to Ukraine―Understanding Modern Warfare Today',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/conflict_the_evolution_of_warfare_from_1945_to_ukr/";
            },},{id: "books-why-nations-fail-the-origins-of-power-prosperity-and-poverty",
          title: 'Why Nations Fail: The Origins of Power, Prosperity, and Poverty',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/why_nations_fail_the_origins_of_power_prosperity_a/";
            },},{id: "books-master-of-change-how-to-excel-when-everything-is-changing-including-you-embracing-life-s-instability-with-rugged-flexibility-a-practical-model-for-resilience",
          title: 'Master of Change: How to Excel When Everything Is Changing, Including You; Embracing...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/master_of_change_how_to_excel_when_everything_is_c/";
            },},{id: "books-kratka-uputa-u-prošlost-bosne-i-hercegovine",
          title: 'Kratka uputa u prošlost Bosne i Hercegovine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/kratka_uputa_u_prolost_bosne_i_hercegovine/";
            },},{id: "books-modern-time-series-forecasting-with-python-explore-industry-ready-time-series-forecasting-using-modern-machine-learning-and-deep-learning",
          title: 'Modern Time Series Forecasting with Python: Explore industry-ready time series forecasting using modern...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/modern_time_series_forecasting_with_python_explore/";
            },},{id: "books-goodbye-eastern-europe-an-intimate-history-of-a-divided-land",
          title: 'Goodbye, Eastern Europe: An Intimate History of a Divided Land',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/goodbye_eastern_europe_an_intimate_history_of_a_di/";
            },},{id: "books-i-robot",
          title: 'I, Robot',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/i_robot/";
            },},{id: "books-the-great-dune-trilogy",
          title: 'The Great Dune Trilogy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_great_dune_trilogy/";
            },},{id: "books-build-a-large-language-model",
          title: 'Build a Large Language Model',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/build_a_large_language_model/";
            },},{id: "books-deep-learning",
          title: 'Deep Learning',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/deep_learning/";
            },},{id: "books-the-beginning-of-infinity-explanations-that-transform-the-world",
          title: 'The Beginning of Infinity: Explanations That Transform the World',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_beginning_of_infinity_explanations_that_transf/";
            },},{id: "books-empire-of-ai-dreams-and-nightmares-in-sam-altman-39-s-openai",
          title: 'Empire of AI: Dreams and Nightmares in Sam Altman&amp;#39;s OpenAI',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/empire_of_ai_dreams_and_nightmares_in_sam_altmans_/";
            },},{id: "books-the-death-of-yugoslavia",
          title: 'The Death of Yugoslavia',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_death_of_yugoslavia/";
            },},{id: "books-the-thinking-machine-jensen-huang-nvidia-and-the-world-39-s-most-coveted-microchip",
          title: 'The Thinking Machine: Jensen Huang, Nvidia, and the World&amp;#39;s Most Coveted Microchip',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_thinking_machine_jensen_huang_nvidia_and_the_w/";
            },},{id: "books-the-biggest-ideas-in-the-universe-quanta-and-fields",
          title: 'The Biggest Ideas in the Universe: Quanta and Fields',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_biggest_ideas_in_the_universe_quanta_and_field/";
            },},{id: "books-ai-engineering-building-applications-with-foundation-models",
          title: 'AI Engineering: Building Applications with Foundation Models',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/ai_engineering_building_applications_with_foundati/";
            },},{id: "books-the-protestant-ethic-and-the-spirit-of-capitalism",
          title: 'The Protestant Ethic and the Spirit of Capitalism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_protestant_ethic_and_the_spirit_of_capitalism/";
            },},{id: "books-what-is-a-nation-and-other-political-writings",
          title: 'What Is a Nation? and Other Political Writings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/what_is_a_nation_and_other_political_writings/";
            },},{id: "books-the-lord-of-the-rings",
          title: 'The Lord of the Rings',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_lord_of_the_rings/";
            },},{id: "books-careless-people-a-cautionary-tale-of-power-greed-and-lost-idealism",
          title: 'Careless People: A Cautionary Tale of Power, Greed, and Lost Idealism',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/careless_people_a_cautionary_tale_of_power_greed_a/";
            },},{id: "books-architecture-patterns-with-python-enabling-test-driven-development-domain-driven-design-and-event-driven-microservices",
          title: 'Architecture Patterns with Python: Enabling Test-Driven Development, Domain-Driven Design, and Event-Driven Microservices',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/architecture_patterns_with_python_enabling_test_dr/";
            },},{id: "books-the-bastard-brigade-the-true-story-of-the-renegade-scientists-and-spies-who-sabotaged-the-nazi-atomic-bomb",
          title: 'The Bastard Brigade: The True Story of the Renegade Scientists and Spies Who...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_bastard_brigade_the_true_story_of_the_renegade/";
            },},{id: "news-master-39-s-thesis-presented-at-erk-2021",
          title: 'Master&amp;#39;s thesis presented at ERK 2021',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-08-01-masters-thesis/";
            },},{id: "news-software-engineer-at-cosylab",
          title: 'Software Engineer at Cosylab',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2021-09-01-cosylab/";
            },},{id: "news-started-my-phd-at-mälardalen-university",
          title: 'Started my PhD at Mälardalen University',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-09-01-phd-start/";
            },},{id: "news-neural-network-abstraction-talk-at-aisola-2023",
          title: 'Neural network abstraction talk at AISoLA 2023',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023-10-01-aisola-2023/";
            },},{id: "news-cache-miss-prediction-article-in-sttt",
          title: 'Cache miss prediction article in STTT',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-02-22-sttt-journal/";
            },},{id: "news-cpu-load-forecasting-paper-at-compsac-2025",
          title: 'CPU load forecasting paper at COMPSAC 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025-07-08-compsac-2025/";
            },},{id: "news-licentiate-proposal-approved",
          title: 'Licentiate Proposal Approved',
          description: "Licentiate proposal approved by professor Mobyen Uddin Ahmed, at Mälardalen University, 2. October 2025",
          section: "News",handler: () => {
              window.location.href = "/news/2025-10-02-licentiate-proposal/";
            },},{id: "news-hasco-paper-published-at-aeic-2026",
          title: 'HASCO paper published at AEiC 2026',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-06-03-aeic-2026-hasco/";
            },},{id: "news-licentiate-thesis-presented",
          title: 'Licentiate thesis presented',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2026-06-15-licentiate-thesis/";
            },},{id: "projects-perflex-project",
          title: 'PerFlex Project',
          description: "Performant and Flexible digital Systems through Verifiable AI",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_perflex/";
            },},{id: "projects-d-rods-project",
          title: 'D-RODS Project',
          description: "A Digital Twin Framework for Dynamic and Robust Distributed Systems",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_drods/";
            },},{id: "projects-tss-insid-project",
          title: 'TSS-INSID Project',
          description: "In-Silico Driving Assurance for Safe Autonomous Vehicles",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_insid/";
            },},{id: "teachings-data-structures-algorithms-and-programming-construction-with-python",
          title: 'Data Structures, Algorithms and Programming Construction with Python',
          description: "Abstract data types, dynamic data structures, searching and sorting algorithms, and time complexity analysis.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/dva245-data-structures/";
            },},{id: "teachings-data-communication-for-embedded-systems-1",
          title: 'Data Communication for Embedded Systems 1',
          description: "Theoretical and practical knowledge of data communication and networking for embedded systems.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/dva258-data-communication/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV_mini_version_Edin_Jelacic.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%65%64%69%6E.%6A%65%6C%61%63%69%63@%6D%64%75.%73%65", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-2745-4282", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/edin-jelacic", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=KWvrW6YAAAAJ", "_blank");
        },
      },{
        id: 'social-goodreads',
        title: 'Goodreads',
        section: 'Socials',
        handler: () => {
          window.open("https://www.goodreads.com/user/show/51761966-edin-jelacic", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];

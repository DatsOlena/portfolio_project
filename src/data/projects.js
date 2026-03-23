/**
 * Projects data. Add caseStudy: { ... } to any project to enable case study pages.
 */
export const projects = [
  {
    slug: 'livappy',
    title: 'Livappy Real Estate Platform',
    description:
      'Built modern property listing and agent interaction platform using Next.js App Router and TypeScript. Implemented reusable UI components, API-driven data flows, internationalization, and Stripe-based payment intents for promotional features.',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'Stripe', 'OpenAPI'],
    image: '/projects/livappy.png',
    link: 'https://www.livappy.com',
    caseStudy: {
      role: 'Frontend Developer',
      timeline: '2024 – Present',
      problem: `Livappy needed a modern, scalable property listing platform that could handle multilingual content, complex search and filtering, and a seamless experience for both property seekers and real estate agents. The legacy system was difficult to maintain and lacked flexibility for new features.`,
      approach: `I led the frontend architecture using Next.js App Router and TypeScript. I designed a component library that balanced reuse with product-specific customisation, established API contracts with the backend team, and implemented i18n from the ground up. For promotional features, I integrated Stripe payment intents with a clear separation between UI and payment logic.`,
      challenges: [
        {
          title: 'Internationalization at scale',
          text: 'Managing translations across many property types, filters, and user flows required a consistent structure. I set up namespaced translation keys and documented conventions for the team.',
        },
        {
          title: 'API-driven UI without compromising UX',
          text: 'Property data came from multiple endpoints. I introduced a data-fetching layer with loading and error boundaries so the UI stayed responsive while data was fetched in parallel.',
        },
      ],
      impact: `Delivered a production-ready platform that supports property search, agent dashboards, and payment flows. The architecture is maintainable and ready for new markets and feature expansion.`,
      highlights: [
        'Next.js App Router with server and client components',
        'TypeScript end-to-end with shared types',
        'Stripe integration for promotional upgrades',
        'i18n support for multiple languages',
        'Responsive design and accessibility considerations',
      ],
    },
  },
  {
    slug: 'partner-portal',
    title: 'Partner Portal',
    description:
      'Developed enterprise partner management dashboard with onboarding workflows, analytics, and role-based authentication. Integrated CMS-driven dynamic content and RESTful APIs for partner data and asset management.',
    tags: ['React', 'TypeScript', 'Tailwind', 'REST API', 'GraphQL', 'CMS Integration'],
    image: '/projects/partner-portal.png',
    link: 'https://www.screeningeagle.com/partner/signin',
    caseStudy: {
      role: 'Frontend Developer',
      timeline: '2023 – 2025',
      problem: `Screening Eagle needed a central hub for partners to access resources, complete onboarding, and track program status. The existing setup was fragmented across tools, leading to support overhead and a poor partner experience.`,
      approach: `I collaborated with product and design to define onboarding flows and information architecture. I built the dashboard with React and TypeScript, integrating REST and GraphQL APIs for partner data and a headless CMS for marketing content. Role-based access was implemented at the UI and route level.`,
      challenges: [
        {
          title: 'Dual API integration',
          text: 'Partner data lived in REST APIs while content came from a GraphQL CMS. I created abstraction layers so components could consume unified data without coupling to source systems.',
        },
        {
          title: 'Onboarding UX for varied partner types',
          text: 'Different partner tiers had different requirements. I designed a flexible step-based flow that adapted to partner type while keeping the experience consistent.',
        },
      ],
      impact: `Partners can now self-serve onboarding, access materials, and view program status in one place. Support requests related to access and resources decreased, and the dashboard became the main touchpoint for partner engagement.`,
      highlights: [
        'Role-based dashboards and permissions',
        'Multi-step onboarding with validation',
        'REST + GraphQL integration',
        'CMS-driven dynamic content',
        'Analytics and status tracking views',
      ],
    },
  },
  {
    title: 'Corporate Website',
    description:
      'Implemented responsive multi-language corporate website with Symfony backend integration. Built dynamic product, news, and event content delivery supported by scalable AWS infrastructure.',
    tags: ['JavaScript', 'Twig', 'SCSS', 'PHP', 'Symfony', 'AWS'],
    image: '/projects/website.png',
    link: 'https://www.screeningeagle.com',
  },
  {
    title: 'Tracking Time System',
    description:
      'Created internal operations dashboard for employee timesheet tracking and utilization analytics. Delivered real-time reporting features, role management, and exportable analytics visualizations.',
    tags: ['JavaScript', 'Laravel', 'Chart.js', 'Blade', 'REST API'],
    image: '/projects/ET.png',
    link: 'https://trace-development.screeningeagle.cloud/login',
  },
  {
    title: 'Product Master Catalog',
    description:
      'Developed centralized product data management platform with lifecycle dashboards, advanced filtering, and legacy data migration. Implemented integrations for CRM and marketing systems.',
    tags: ['JavaScript', 'Laravel', 'Microservices', 'AWS', 'Data Migration'],
    image: '/projects/FOD.png',
    link: 'https://fod.screeningeagle.cloud/login',
  },
  {
    title: 'Water Monitoring System',
    description:
      'Full-stack water analytics app with interactive dashboards, live/news data feeds, and SQLite CRUD, built with React + TypeScript and Node.js + Express.',
    tags: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'React Router',
      'React Leaflet',
      'Node.js',
      'Express',
      'SQLite (sql.js)',
      'REST API',
      'Jest',
      'React Testing Library',
      'ESLint',
    ],
    image: '/projects/water-monitoring.png',
    github: 'https://github.com/DatsOlena/NTSuisse-demo',
  },
  {
    title: 'Personal Website',
    description:
      'Developed my personal website using React and Tailwind CSS. It is a simple website that showcases my projects and skills.',
    tags: ['React', 'Tailwind', 'Vite', 'TypeScript'],
    image: '/projects/personal-project.png',
    link: 'https://portfolio-project-navy-five.vercel.app/',
    github: 'https://github.com/DatsOlena/portfolio_project',
  },
  {
    title: 'AI Customer Support Assistant',
    description:
      'Soon to be: a production-ready AI support workspace for faster responses, smart routing, and conversation insights.',
    tags: ['React', 'TypeScript', 'Node.js', 'OpenAI API', 'PostgreSQL'],
    image: '/projects/project-placeholder.svg',
  },
  {
    title: 'E-commerce Analytics Hub',
    description:
      'Soon to be: a centralized analytics dashboard for sales, behavior, and campaign performance with real-time reporting.',
    tags: ['Next.js', 'Tailwind CSS', 'Python', 'FastAPI', 'Chart.js'],
    image: '/projects/project-placeholder.svg',
  },
]

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug)

export const caseStudyProjects = projects.filter((p) => p.caseStudy)

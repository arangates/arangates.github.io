// Career facts and skills are drawn from the supplied LinkedIn export, Profile (3).pdf.
// Dates are stored explicitly; durations in LinkedIn exports become stale.
export const workHistory = [
  {
    company: "ASML",
    mark: "ASML",
    tone: "asml",
    location: "Veldhoven, Netherlands",
    roles: [
      {
        title: "Software Engineer 3",
        dates: "July 2022 — Present",
        current: true,
        highlights: [
          "Build full-stack applications for computational lithography, turning analytics into clear, interactive dashboards.",
          "Develop data visualizations for tooling intended to optimize wafer throughput and support monitoring and control in high-volume semiconductor manufacturing.",
        ],
        tags: ["Full-stack development", "Data visualization", "Computational lithography"],
      },
    ],
  },
  {
    company: "Boloo",
    mark: "b.",
    tone: "boloo",
    location: "Eindhoven, Netherlands",
    roles: [
      {
        title: "Full Stack Engineer",
        dates: "August 2020 — July 2022",
        highlights: [
          "Led a complete dashboard redesign and delivered an internal dashboard, email campaign tooling, and an automated invoicing system.",
          "Built reusable components and data visualizations using Ant Design, Material Design, and Tailwind CSS.",
          "Introduced Cypress end-to-end tests and streamlined delivery through CI/CD, linting, formatting, and Git hooks.",
          "Added dark mode, internationalization, and advanced search in collaboration with product and cross-functional teams.",
        ],
        tags: ["React", "Design systems", "Cypress", "CI/CD"],
      },
    ],
  },
  {
    company: "Knight Frank Poland",
    mark: "KF",
    tone: "knight",
    location: "Warsaw, Poland",
    roles: [
      {
        title: "Full Stack Engineer",
        dates: "November 2019 — May 2020",
        highlights: [
          "Developed React and Redux interfaces with server-side rendering, alongside Python, Django, and Django REST Framework backend features.",
          "Built order-book and time-series visualizations and integrated a payment gateway.",
          "Wrote Cypress end-to-end tests and managed Linux deployments with GitLab CI/CD, Docker, and Nginx.",
        ],
        tags: ["React", "Python", "Django", "Docker"],
      },
      {
        title: "Senior Frontend Developer",
        dates: "August 2018 — November 2019",
        highlights: [
          "Migrated the application from client-side to server-side rendering to improve SEO, and implemented localization.",
          "Removed dead code to reduce page bundle sizes by approximately 20%.",
          "Replaced Bootstrap and other libraries with custom styled-components and optimized bundles with webpack bundle analyzer.",
        ],
        tags: ["React", "Redux", "SSR", "Performance"],
      },
      {
        title: "Frontend Developer",
        dates: "November 2017 — August 2018",
        highlights: [
          "Built and maintained Angular interfaces with RxJS and implemented application-wide localization.",
          "Re-engineered the development workflow, increasing compile speed by over 70%.",
          "Improved SEO and performance, reviewed merge requests, and shipped frontend code to production.",
        ],
        tags: ["Angular", "RxJS", "Localization"],
      },
    ],
  },
  {
    company: "Anulom.com",
    mark: "A",
    tone: "anulom",
    location: "Coimbatore, India",
    roles: [
      {
        title: "Frontend Developer",
        dates: "June 2017 — October 2017",
        highlights: [
          "Built a hybrid application from scratch with Angular 4 and Ionic 3.",
          "Integrated backend APIs and AWS S3 storage, and handled reviews, testing, and builds through delivery.",
        ],
        tags: ["Angular", "Ionic", "AWS S3"],
      },
    ],
  },
  {
    company: "iamneo (formerly Examly)",
    mark: "neo",
    tone: "neo",
    location: "Bengaluru, India",
    roles: [
      {
        title: "Frontend Developer",
        dates: "July 2016 — June 2017",
        highlights: [
          "Helped build the MVP from scratch with TypeScript, Angular, RxJS, SCSS, Bootstrap, and Webpack.",
          "Created a design system and established consistent coding practices across the application.",
        ],
        tags: ["TypeScript", "Angular", "Design systems", "PWA"],
      },
    ],
  },
  {
    company: "Accenture",
    mark: ">",
    tone: "accenture",
    location: "Bengaluru, India",
    roles: [
      {
        title: "Associate Software Engineer",
        dates: "May 2016 — July 2016",
        highlights: [],
        tags: [],
      },
    ],
  },
] as const;

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend & interfaces",
    description: "Building responsive applications and consistent, reusable interfaces.",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Next.js",
      "Angular",
      "RxJS",
      "HTML",
      "CSS",
      "Sass / SCSS",
      "Tailwind CSS",
      "styled-components",
      "Ant Design",
      "Material Design",
      "Bootstrap",
      "Ionic",
    ],
  },
  {
    id: "backend",
    title: "Backend & data",
    description: "Connecting interfaces to APIs, application logic, and data.",
    skills: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Redis"],
  },
  {
    id: "delivery",
    title: "Testing & delivery",
    description: "Keeping software maintainable, testable, and ready to ship.",
    skills: [
      "Cypress",
      "End-to-end testing",
      "CI/CD",
      "GitLab CI/CD",
      "Docker",
      "Nginx",
      "Linux",
      "AWS S3",
      "Webpack",
      "ESLint",
      "Prettier",
      "Git hooks",
    ],
  },
  {
    id: "practice",
    title: "Engineering practices",
    description: "Making complex applications easier to use and faster to run.",
    skills: [
      "Data visualization",
      "Design systems",
      "Server-side rendering",
      "Performance optimization",
      "Internationalization",
      "SEO",
      "Progressive web apps",
      "Cross-functional collaboration",
    ],
  },
  {
    id: "domain",
    title: "Semiconductors & problem solving",
    description:
      "Software engineering in the context of computational lithography and manufacturing.",
    skills: [
      "Semiconductor engineering",
      "Computational lithography",
      "8D problem solving",
      "A3 problem solving",
    ],
  },
] as const;
export const certifications = [
  "Embedded Systems",
  "React: Context API Development",
  "Building React and Django Apps",
  "React: Using TypeScript",
  "Sass Essential Training",
];

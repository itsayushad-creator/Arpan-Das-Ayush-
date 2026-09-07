import { Project, SkillItem, ExperienceItem, ArticleItem, QuickStat } from '../types';

export const PERSONAL_INFO = {
  name: "Arpan Das",
  nickname: "Ayush",
  displayName: "Arpan Das (Ayush)",
  tagline: "Full-Stack Developer, Open Knowledge Contributor & Creative Technologist",
  email: "its.ayush.ad@gmail.com",
  location: "West Bengal, India",
  timezone: "Asia/Kolkata (IST, UTC+5:30)",
  availability: "Available for freelance projects & open-source collaboration",
  shortBio: "Crafting performant web experiences, curating open digital knowledge on Wikipedia, and exploring modern software engineering, web security, and creative digital media.",
  aboutParagraphs: [
    "Hello! I'm Arpan Das, often known across digital spaces as Ayush. I am a passionate web developer, digital creator, and open-source enthusiast based in West Bengal, India. My journey began with an innate curiosity about how computer networks, software, and creative storytelling intersect.",
    "Over the years, I have expanded my focus across full-stack web development using modern TypeScript, React, and Node.js ecosystems, while actively contributing to free knowledge initiatives. As a dedicated Wikipedia and Wikimedia Commons contributor, I research, verify facts, and expand cultural and technical documentation to help make verified information universally accessible.",
    "I believe in clean craftsmanship—writing concise, maintainable code, respecting responsive design principles, and engineering tools that bring measurable utility to people. When I'm not writing code or editing articles, you'll find me analyzing network security protocols, exploring creative media editing, and tracking the latest breakthroughs in web technology."
  ],
  stats: [
    { label: "Active Contributor", value: "Wikipedia", sublabel: "Open knowledge & digital curation" },
    { label: "Tech Stack", value: "React & Node", sublabel: "TypeScript, Tailwind & Cloud" },
    { label: "Focus Areas", value: "3+ Domains", sublabel: "Web Dev, Security & Media" },
    { label: "Commitment", value: "100%", sublabel: "Quality & Clean Engineering" },
  ] as QuickStat[],
  socialLinks: {
    email: "mailto:its.ayush.ad@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    wikimedia: "https://commons.wikimedia.org",
    wikipedia: "https://en.wikipedia.org"
  }
};

export const SKILLS: SkillItem[] = [
  // Frontend
  {
    name: "React & Next.js",
    level: 90,
    category: "frontend",
    icon: "Atom",
    experienceYears: "3+ yrs",
    description: "Component lifecycle, modern hooks, server/client patterns, and state architecture."
  },
  {
    name: "TypeScript & JavaScript (ESNext)",
    level: 88,
    category: "frontend",
    icon: "Code2",
    experienceYears: "3+ yrs",
    description: "Strict type safety, generic types, asynchronous programming, and clean interfaces."
  },
  {
    name: "Tailwind CSS & Modern CSS",
    level: 94,
    category: "frontend",
    icon: "Palette",
    experienceYears: "3+ yrs",
    description: "Utility-first architecture, fluid responsive layouts, CSS grid, flexbox, and micro-interactions."
  },
  {
    name: "HTML5 & Semantic Web Standards",
    level: 96,
    category: "frontend",
    icon: "FileCode2",
    experienceYears: "4+ yrs",
    description: "Accessible DOM structure (WCAG AA), SEO meta semantics, and cross-browser resilience."
  },

  // Backend
  {
    name: "Node.js & Express",
    level: 84,
    category: "backend",
    icon: "Server",
    experienceYears: "2+ yrs",
    description: "Building scalable RESTful endpoints, middleware chains, token validation, and error boundaries."
  },
  {
    name: "REST APIs & JSON Architectures",
    level: 88,
    category: "backend",
    icon: "Workflow",
    experienceYears: "3+ yrs",
    description: "API design, endpoint documentation, status code semantics, and payload optimization."
  },
  {
    name: "Databases & Key-Value Stores",
    level: 78,
    category: "backend",
    icon: "Database",
    experienceYears: "2+ yrs",
    description: "Relational modeling, document databases, Firestore structures, and client caching."
  },

  // Tools
  {
    name: "Git & GitHub Collaboration",
    level: 90,
    category: "tools",
    icon: "GitBranch",
    experienceYears: "3+ yrs",
    description: "Branching workflows, version control, semantic pull requests, and CI/CD basics."
  },
  {
    name: "Linux & Shell Scripting",
    level: 82,
    category: "tools",
    icon: "Terminal",
    experienceYears: "2+ yrs",
    description: "Command line proficiency, bash scripting, server deployment, and package managers."
  },
  {
    name: "Vite, npm & Modern Tooling",
    level: 88,
    category: "tools",
    icon: "Cpu",
    experienceYears: "3+ yrs",
    description: "Bundling, hot reload workflows, linting, and dependency auditing."
  },

  // Knowledge & Writing
  {
    name: "Wikipedia Research & Fact-Checking",
    level: 95,
    category: "knowledge",
    icon: "BookOpen",
    experienceYears: "4+ yrs",
    description: "Neutral point of view (NPOV), verified citation standards, and Wikipedia policy compliance."
  },
  {
    name: "Technical Writing & Documentation",
    level: 89,
    category: "knowledge",
    icon: "PenTool",
    experienceYears: "3+ yrs",
    description: "Clear architectural overviews, developer guides, and structured educational blog posts."
  },
  {
    name: "Wikimedia Commons & Digital Media",
    level: 86,
    category: "knowledge",
    icon: "Image",
    experienceYears: "3+ yrs",
    description: "Open-license asset curation, metadata tagging, and multimedia archiving."
  },

  // Security
  {
    name: "Web Application Security",
    level: 80,
    category: "security",
    icon: "ShieldCheck",
    experienceYears: "2+ yrs",
    description: "OWASP Top 10 awareness, CORS configuration, CSP policies, and input sanitization."
  },
  {
    name: "Network & Privacy Hygiene",
    level: 83,
    category: "security",
    icon: "Lock",
    experienceYears: "2+ yrs",
    description: "DNS security, HTTPS/TLS analysis, headers inspection, and user data privacy practices."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "wiki-scribe",
    title: "WikiVerify & Citation Hub",
    subtitle: "Open Knowledge Verification Utility",
    description: "A fast, client-driven utility designed for Wikipedia editors and researchers to validate reference URLs, format citations in Wiki-markup/templates, and detect broken digital archives.",
    category: "opensource",
    tags: ["React", "TypeScript", "Wikipedia API", "Tailwind CSS"],
    metrics: "Instant citation formatting & verification",
    featured: true,
    iconName: "BookMarked",
    highlights: [
      "Automated extraction of page metadata into standard Wikipedia citation templates (cite web, cite journal)",
      "Live status checker verifying archival links (Wayback Machine API integration)",
      "Real-time syntax validation eliminating common formatting errors before publishing"
    ],
    architecture: "Built with React 19 and custom utility parsers. Uses client-side regex engines for Wiki-markup generation with zero external tracking.",
    githubUrl: "https://github.com",
    liveUrl: "#"
  },
  {
    id: "omni-pulse",
    title: "OmniPulse Developer Cockpit",
    subtitle: "Full-Stack Web Monitoring & Diagnostics Dashboard",
    description: "A modular developer productivity dashboard providing quick latency testing, HTTP response inspect, JSON formatting, and responsive screen view simulation.",
    category: "fullstack",
    tags: ["TypeScript", "Node.js", "Express", "Tailwind CSS"],
    metrics: "<50ms client processing latency",
    featured: true,
    iconName: "Activity",
    highlights: [
      "Real-time REST API testbench with header inspection and response payload analysis",
      "Interactive responsive canvas testing multi-device breakpoints simultaneously",
      "Dark-mode optimized UI following mathematical typography and WCAG AA contrast rules"
    ],
    architecture: "Express micro-server paired with Vite React frontend, structured around decoupled widget modules.",
    githubUrl: "https://github.com",
    liveUrl: "#"
  },
  {
    id: "net-sentrix",
    title: "NetSentrix Security Inspector",
    subtitle: "Web Security Headers & SSL Health Analyzer",
    description: "A security auditing tool that checks web applications for essential security headers (HSTS, Content-Security-Policy, X-Frame-Options) and scores digital privacy posture.",
    category: "security",
    tags: ["Cybersecurity", "TypeScript", "Web Standards", "Security Headers"],
    metrics: "Audits 12+ security headers instantly",
    featured: true,
    iconName: "ShieldAlert",
    highlights: [
      "Comprehensive scoring algorithm evaluating defense against Clickjacking and XSS",
      "Tailored remediation guides with copy-paste server snippets for Nginx, Apache, and Express",
      "Offline-first diagnostic capability with clear visual threat matrix"
    ],
    architecture: "Engineered with modular rule engines and security checklist evaluators based on OWASP security guidelines.",
    githubUrl: "https://github.com",
    liveUrl: "#"
  },
  {
    id: "dev-chronicles",
    title: "Tech Chronicles & Insights Engine",
    subtitle: "Modern Markdown Publishing Platform",
    description: "A minimalist, distraction-free technical writing and blogging engine featuring instant search, estimated read-times, syntax highlighting, and RSS feed generation.",
    category: "fullstack",
    tags: ["React", "Markdown", "Content Engineering", "SEO"],
    metrics: "100/100 Lighthouse Performance",
    featured: false,
    iconName: "FileText",
    highlights: [
      "Instant client-side fuzzy search across articles, tags, and code blocks",
      "Automatic table-of-contents generation and dynamic reading progress indicator",
      "Zero cumulative layout shift (CLS) with optimized font loading strategies"
    ],
    architecture: "Static site generation with dynamic client search indexing and clean semantic HTML5 markup.",
    githubUrl: "https://github.com",
    liveUrl: "#"
  },
  {
    id: "commons-curator",
    title: "Wikimedia Media Curator",
    subtitle: "Open Media Archival & Metadata Tagging Kit",
    description: "A specialized browser workspace assisting cultural preservationists in standardizing metadata, categories, and licensing for uploads to Wikimedia Commons.",
    category: "opensource",
    tags: ["Wikimedia Commons", "Metadata", "Creative Commons", "JavaScript"],
    metrics: "Over 50+ media contributions organized",
    featured: false,
    iconName: "Sparkles",
    highlights: [
      "EXIF data reader extracting geolocation and camera parameters for preservation logs",
      "Structured data generator mapping to Wikidata entity properties",
      "Quick category suggestion engine reducing classification overhead"
    ],
    architecture: "HTML5 Canvas metadata processor combined with Wikimedia API data mapping.",
    githubUrl: "https://github.com",
    liveUrl: "#"
  },
  {
    id: "quick-snippet",
    title: "QuickRef Snippet Lab",
    subtitle: "Developer Code Vault with Keyboard-First UX",
    description: "A personal repository of battle-tested code snippets, bash one-liners, and security configurations with instant search and one-click clipboard copying.",
    category: "creative",
    tags: ["React", "LocalStorage", "Developer Tools", "Tailwind"],
    metrics: "Keyboard-first navigation with Cmd+K",
    featured: false,
    iconName: "Terminal",
    highlights: [
      "Global Command Palette (Ctrl/Cmd + K) for sub-second snippet discovery",
      "Local browser persistence with export/import JSON backup functionality",
      "Custom syntax theme tuned for reduced eye fatigue during long sessions"
    ],
    architecture: "Local-first React architecture leveraging custom state management and indexed storage.",
    githubUrl: "https://github.com",
    liveUrl: "#"
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Open Knowledge Contributor & Editor",
    organization: "Wikipedia & Wikimedia Foundation Projects",
    period: "2021 — Present",
    location: "Global / Remote",
    badge: "Open Source",
    description: "Active contributor focusing on improving encyclopedic articles, maintaining verifiability standards, and archiving educational media.",
    bullets: [
      "Curated and expanded articles across technology, Indian heritage, and digital culture adhering to strict NPOV (Neutral Point of View) policies.",
      "Verified secondary sources, eliminated unsubstantiated claims, and formatted references to adhere to international citations.",
      "Contributed original photography and media assets under Creative Commons licenses on Wikimedia Commons."
    ],
    tags: ["Wikipedia", "Fact Checking", "Wikimedia Commons", "Research", "Open Source"],
    type: "opensource"
  },
  {
    id: "exp-2",
    role: "Independent Full-Stack Developer",
    organization: "Personal & Client Projects",
    period: "2022 — Present",
    location: "West Bengal, India",
    badge: "Engineering",
    description: "Designing, building, and deploying responsive web applications, interactive web tools, and developer utilities.",
    bullets: [
      "Developed custom frontend interfaces and full-stack tools using React, TypeScript, Node.js, and Tailwind CSS.",
      "Engineered diagnostic utilities including security header evaluators, citation formatters, and responsive layout testbeds.",
      "Implemented accessibility best practices (WCAG AA compliance) and optimized web vital metrics for sub-second load times."
    ],
    tags: ["React", "TypeScript", "Node.js", "Express", "Tailwind CSS", "API Design"],
    type: "dev"
  },
  {
    id: "exp-3",
    role: "Digital Content Creator & Tech Blogger",
    organization: "Tech Chronicles & Online Portals",
    period: "2020 — Present",
    location: "India",
    badge: "Media & Writing",
    description: "Publishing insightful technical articles, tutorials on internet hygiene, and reflections on evolving digital platforms.",
    bullets: [
      "Authored long-form essays and educational guides on web technologies, ethical hacking fundamentals, and digital privacy.",
      "Produced multimedia content and visual documentation for online learning communities.",
      "Explored the intersection of creative arts, technology, and online community empowerment."
    ],
    tags: ["Technical Writing", "Blogging", "SEO", "Creative Media", "Cybersecurity"],
    type: "media"
  },
  {
    id: "exp-4",
    role: "Academic & Technical Foundations",
    organization: "Palashipara Mahatma Gandhi Smriti Vidyapith",
    period: "Formative Education",
    location: "Nadia, West Bengal, India",
    badge: "Education",
    description: "Built strong mathematical foundations, computer science fundamentals, and participated actively in co-curricular creative events.",
    bullets: [
      "Demonstrated excellence in analytical subjects, computer applications, and competitive activities.",
      "Active participant in cultural, debate, and creative performance events ('Go as You Like' and youth showcases).",
      "Cultivated self-directed learning in programming, internet protocols, and software architecture."
    ],
    tags: ["Computer Science", "Mathematics", "Analytical Thinking", "Communication"],
    type: "education"
  }
];

export const ARTICLES: ArticleItem[] = [
  {
    id: "art-1",
    title: "Preserving Truth in the Age of Synthetic Information",
    excerpt: "Why rigorous human-curated encyclopedias like Wikipedia matter more than ever, and how digital contributors safeguard open knowledge.",
    readTime: "5 min read",
    date: "August 2026",
    category: "Open Knowledge",
    tags: ["Wikipedia", "Information Architecture", "Open Source", "Digital Ethics"],
    content: [
      "As automated text generation floods every corner of the modern internet, the distinction between authentic knowledge and synthetic assertions has become precarious. For decades, the open web thrived on the premise that collective human curiosity could document reality through consensus and verifiable citations.",
      "Working as an editor on Wikipedia provides a first-hand perspective on the fragility of digital truth. Every sentence published on an encyclopedia article requires a reliable, independent secondary source. This standard—though often demanding—is our strongest defense against misinformation.",
      "In this essay, I explore why open-source knowledge preservation remains the bedrock of internet literacy, the ethical responsibilities of human editors, and how younger technologists can contribute to preserving authentic digital history."
    ]
  },
  {
    id: "art-2",
    title: "Building Resilient Frontend Applications with Zero Bloat",
    excerpt: "A practical guide to crafting lightning-fast, accessible web interfaces without succumbing to unnecessary framework overhead.",
    readTime: "6 min read",
    date: "July 2026",
    category: "Web Engineering",
    tags: ["Frontend", "Performance", "React", "Tailwind CSS", "Architecture"],
    content: [
      "Modern web development has an addiction to excessive dependencies. Simple user interfaces often ship with hundreds of kilobytes of unused JavaScript, sluggish layout recalculations, and compromised mobile experiences.",
      "True craftsmanship in software engineering isn't about how many libraries you bundle; it's about how thoughtfully you use the primitives of the web platform: clean HTML semantics, mathematically calculated CSS spacing, and lightweight reactive state.",
      "By focusing on accessibility standards (WCAG AA), deterministic layout constraints, and predictable component lifecycles, we can deliver web applications that load in milliseconds across any cellular connection."
    ]
  },
  {
    id: "art-3",
    title: "Everyday Web Security: Practical Hygiene for Developers and Creators",
    excerpt: "Understanding modern security headers, preventing data leaks, and developing an intuitive threat model for your web applications.",
    readTime: "4 min read",
    date: "May 2026",
    category: "Cybersecurity",
    tags: ["Security", "HTTP Headers", "Privacy", "Web Defense"],
    content: [
      "Security isn't a feature you toggle at the end of a project; it's an architectural mindset that begins with your first line of code. From misconfigured Content Security Policies (CSP) to exposed API tokens, small oversights can leave applications vulnerable.",
      "In this piece, we break down the five most critical HTTP headers every webmaster must configure, how to sanitize user input to eliminate Cross-Site Scripting (XSS), and simple daily habits that keep your personal credentials safe in an adversarial digital landscape.",
      "A proactive defense posture empowers developers to build with confidence, ensuring users can trust the services we deliver."
    ]
  }
];

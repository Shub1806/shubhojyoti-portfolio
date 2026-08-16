// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE AND NOTHING ELSE.
//  Every word, project, and map pin on the site comes from here.
//
//  TODO before you deploy — search this file for "FILL IN":
//    1. Your email address
//    2. Your GitHub and LinkedIn URLs
//    3. Repo links for each project (leave '' to hide the link)
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Shubhojyoti Datta Chaudhuri',
  role: 'Software & Machine Learning Engineer',
  thesis:
    "I'm a CS master's student at the University at Buffalo. I build machine learning systems and web tools — most recently a publishing pipeline for a fashion startup and a classifier that predicts Buffalo police districts from emergency call data.",
  location: 'Buffalo, New York',
  email: '2002datta@gmail.com',
  resumeFile: '/resume.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/Shub1806' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shubhojyotidatta/' },
  ],
};

export const about = [
  'I started with web development in undergrad small sites, a bus booking app, a telemedicine platform I led a team on. Somewhere in there I got pulled into machine learning and stayed. What I like is the part where a model stops being a tutorial and starts being something you have to debug: why the accuracy dropped, why one class is stuck at 0.89 when the rest sit at 0.96.',
  "Right now I'm finishing my MS in Computer Science at UB. Last spring I worked with a real client, a fashion discovery app called Look the Part, building the pipeline that pushes their in-app content out to the web. Before that I spent a semester inside the Pintos kernel implementing priority scheduling and donation, which taught me more about careful debugging than any class has.",
  "I'm looking for software engineering and AI/ML roles. If you have something that needs building end to end not just the model, but the parts around it that make it usable that's the work I want.",
];

export const experience = [
  {
    period: 'Jan 2026 — Jun 2026',
    role: 'Software Developer',
    org: 'LookThePart',
    href: '',
    detail:
      'Shipped 10+ REST API endpoints and maintained 50+ existing endpoints across authentication, product search, post sharing, and media handling. Modeled 15+ PostgreSQL entities with the Django ORM, added Pillow-based processing to an AWS S3 pipeline serving 10,000+ images, and resolved production timeouts and editorial ordering defects.',
    tools: ['Python', 'Django REST Framework', 'PostgreSQL', 'AWS S3', 'Pillow'],
  },
  {
    period: 'May 2024 — Jun 2025',
    role: 'Software Engineer Intern',
    org: 'VertexPlus Technologies Limited',
    href: '',
    detail:
      'Developed Python backend components for an automotive data-processing platform and integrated TensorFlow OCR into a Django interface. Improved recognition with character purification and page-orientation correction, then built reusable object-oriented vehicle scoring logic to automate assessments.',
    tools: ['Python', 'Django', 'TensorFlow', 'OCR', 'Image Processing'],
  },
];

export const projects = [
  {
    name: 'PintOS Thread Scheduler and User Programs',
    year: '2026',
    blurb:
      'Extended the PintOS kernel with priority scheduling and priority donation across locks, semaphores, and condition variables. Implemented and debugged 13 system call handlers covering process execution, argument passing, file descriptors, and user-memory validation.',
    tools: ['C', 'PintOS Kernel', 'GCC', 'QEMU', 'Linux'],
    live: '',
    source: '', // FILL IN
    featured: true,
  },
  {
    name: 'Cashback Reconciler',
    year: '2026',
    blurb:
      'A deterministic rewards reconciliation engine that normalizes merchant names, matches card-linked offers against posted transactions, and classifies rewards as posted, pending, missing, or ineligible. Validated the object-oriented matching and issuer-scoring logic with 16 PyTest tests and scaffolded LLM email extraction with Plaid integration.',
    tools: ['Python', 'PyTest', 'Plaid', 'LLMs'],
    live: '',
    source: 'https://github.com/Shub1806/cashback-reconciler',
    featured: false,
  },
  {
    name: 'Sentiment and Emotion Analyzer',
    year: '2026',
    blurb:
      'A full-stack model evaluation platform with a Flask REST API and React interface that compares predictions from five Hugging Face transformer models. Produces ensemble classifications through majority voting with confidence scoring and disagreement detection.',
    tools: ['React', 'Flask', 'Hugging Face Transformers', 'PyTorch'],
    live: '',
    source: 'https://github.com/Shub1806/sentiment-emotion-analyzer',
    featured: false,
  },
];

export const education = [
  {
    period: '2025 — Present',
    credential: 'M.S. Computer Science',
    org: 'University at Buffalo, SUNY',
    detail:
      'Machine Learning, Operating Systems, Deep Learning, Big Data Analytics, Data Visualization, and Project Management. Currently taking the CS capstone and a seminar on LLM applications.',
  },
  {
    period: '2021 — 2025',
    credential: 'B.E. Computer Science',
    org: 'Chandigarh University, Mohali',
    detail:
      'Class Representative for two years. NPTEL Internet of Things certification, Elite + Silver.',
  },
];

export const stack = [
  { group: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'JavaScript', 'SQL'] },
  { group: 'Machine Learning', items: ['PyTorch', 'scikit-learn', 'pandas', 'CNNs', 'NLP'] },
  {
    group: 'Data & Systems',
    items: ['Spark', 'Hadoop', 'Hive', 'HDFS', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  { group: 'Web & Mobile', items: ['Django', 'Flutter', 'Firebase', 'HTML', 'CSS'] },
  { group: 'Tools', items: ['Docker', 'Git', 'Linux', 'Figma', 'Playwright', 'Tableau'] },
];

export const awards = [
  {
    year: '2024',
    title: 'NPTEL Internet of Things — Elite + Silver',
    org: 'NPTEL',
    href: 'https://drive.google.com/file/d/1lXNwCMXifhxqUyMk_ld8DahqGoJm24id/view?usp=sharing',
    detail: 'Top-percentile result in the national online certification exam.',
  },
  {
    year: '2021 — 2023',
    title: 'Class Representative',
    org: 'Chandigarh University',
    href: '',
    detail: 'Elected two years running; also served on the university discipline team.',
  },
];

// ─── The map ──────────────────────────────────────────────────
// Pins are drawn in array order and joined by a dashed route,
// so list them chronologically.
export const places = [
  {
    city: 'Jaipur, India',
    lat: 26.9124,
    lng: 75.7873,
    year: 'Home',
    note: 'Where I grew up, and where my family still is.',
  },
  {
    city: 'Mohali, India',
    lat: 30.7046,
    lng: 76.7179,
    year: '2021',
    note: 'Four years of engineering at Chandigarh University.',
  },
  {
    city: 'Buffalo, USA',
    lat: 42.8864,
    lng: -78.8784,
    year: '2025',
    note: 'Landed in August for my master’s at UB. Still adjusting to the snow.',
  },
];

export const chatStarters = [
  'What machine learning work has he done?',
  'Tell me about the Look the Part project',
  'What is he looking for next?',
];

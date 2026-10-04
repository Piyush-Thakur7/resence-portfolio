export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  domain: string;
  domainLabel: string;
  category: 'AI Assistant' | 'Frontier Healthcare' | 'Agentic Commerce' | 'Social Impact' | 'Health & Fitness' | 'Utilities';
  techStack: string[];
  githubUrl?: string;
  badge?: string;
  isFlagship?: boolean;
  imageUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: 'Google Cloud' | 'AI & ML' | 'Cloud & Systems' | 'Data & Analytics' | 'Security';
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  credentialId?: string;
  highlightBadge: string;
}

export const FOUNDER_INFO = {
  name: 'Piyush Singh',
  alternateName: 'Piyush Thakur',
  tagline: "Founder & CEO, Resence · Building Frontier Multi-Model AI & Agentic Commerce",
  bio: "Founder of Resence and AI Systems Architect directing autonomous coding agents to build multi-model AI assistants, medical intelligence tools, and agentic commerce protocols.",
  birthDate: '2008-01-11', // January 11, 2008
  college: 'GL Bajaj Institute of Management (GLBIM), Greater Noida',
  university: 'Chaudhary Charan Singh University (CCSU), Meerut',
  degree: 'Bachelor of Computer Applications (BCA)',
  specialization: 'Artificial Intelligence & Machine Learning (AI/ML)',
  academicYear: '2nd Year (3rd Semester, Class of 2028)',
  location: 'Greater Noida & Sikandrabad, Uttar Pradesh, India',
  email: 'th.piyushsingh2007@gmail.com',
  github: 'https://github.com/Piyush-Thakur7',
  linkedin: 'https://linkedin.com/in/piyush-singh2007',
  domain: 'https://www.resence.in',
};

export const RESENCE_PROJECTS: Project[] = [
  {
    id: 'resence-ai',
    title: 'Resence AI',
    tagline: 'Multi-Model AI Assistant & Intelligence Hub',
    description: 'Hardware-accelerated AI assistant orchestrating multiple frontier LLM models (Groq Llama 3.3 70B, Google Gemini 2.5 Flash, NVIDIA Nemotron 3.5, DeepSeek R1) with 100% prefix-locked KV-caching, multimodal vision, dynamic PPTX/PDF generator, and real-time live web search.',
    domain: 'https://ai.resence.in',
    domainLabel: 'ai.resence.in',
    category: 'AI Assistant',
    techStack: ['Next.js 14', 'TypeScript', 'Groq LPU', 'Gemini 2.5 Flash', 'NVIDIA Nemotron', 'PWA'],
    githubUrl: 'https://github.com/Piyush-Thakur7/aiassistant',
    badge: 'Flagship AI Hub',
    isFlagship: true,
    imageUrl: '/images/resence-ai-preview.jpg'
  },
  {
    id: 'wellbridge-ai',
    title: 'WellBridge AI',
    tagline: 'Patient Health Journal & Multimodal Medical Demystifier',
    description: 'Frontier healthcare companion developed for Google Cloud Gen AI Academy APAC (Cohort 3). Ingests complex multi-page pathology and radiology reports with Gemini Multimodal OCR and translates findings into clear patient guidance.',
    domain: 'https://wellbridgeai.resence.in',
    domainLabel: 'wellbridgeai.resence.in',
    category: 'Frontier Healthcare',
    techStack: ['Google Cloud Run', 'Gemini 3.7 Flash Vision', 'Firebase Auth', 'Cloud Firestore', 'TypeScript'],
    githubUrl: 'https://github.com/Piyush-Thakur7/WellBridge',
    badge: 'Google Cloud Academy',
    isFlagship: true,
    imageUrl: '/images/wellbridge-preview.jpg'
  },
  {
    id: 'razoragent',
    title: 'RazorAgent MCP',
    tagline: 'Model Context Protocol (MCP) Autonomous Commerce Engine',
    description: 'Published NPM package enabling AI reasoning models (Claude, ChatGPT, Hermes) to execute deterministic payments, link generation, and refunds with cryptographic SHA-256 idempotency locks. Built for Razorpay AI Buildathon 2026.',
    domain: 'https://razoragent.resence.in',
    domainLabel: 'razoragent.resence.in',
    category: 'Agentic Commerce',
    techStack: ['TypeScript', 'Model Context Protocol (MCP)', 'Razorpay API', 'NPM Package v1.1.5', 'Node.js'],
    githubUrl: 'https://github.com/Piyush-Thakur7/razoragent',
    badge: 'NPM Published Package',
    imageUrl: '/images/razoragent-preview.jpg'
  },
  {
    id: 'servemate',
    title: 'ServeMATE',
    tagline: 'Gamified Social Impact & NGO Donation Platform',
    description: 'Platform connecting individual donors and corporate CSRs with verified grassroots NGOs. Features Gemini AI donation advisor, real-time campaign transparency, and automated Razorpay checkout workflows.',
    domain: 'https://servemate.resence.in',
    domainLabel: 'servemate.resence.in',
    category: 'Social Impact',
    techStack: ['Next.js', 'Gemini AI', 'Tailwind CSS', 'Razorpay Payments', 'JavaScript'],
    githubUrl: 'https://github.com/Piyush-Thakur7/ServeMATE',
    badge: 'MSME Hackathon 6.0',
    imageUrl: '/images/servemate-preview.jpg'
  },
  {
    id: 'resence-fitness',
    title: 'Resence Fitness',
    tagline: 'AI Workout Architecture & Nutrition Tracker',
    description: 'Personalized fitness and biomechanics companion that formulates customized high-intensity split routines, calculates macronutrient targets, and tracks strength progression over time.',
    domain: 'https://fitness.resence.in',
    domainLabel: 'fitness.resence.in',
    category: 'Health & Fitness',
    techStack: ['TypeScript', 'React', 'Tailwind CSS', 'Local State Storage'],
    githubUrl: 'https://github.com/Piyush-Thakur7/ResenceFitness',
    badge: 'Live Prototype',
    imageUrl: '/images/hero-mesh.jpg'
  },
  {
    id: 'anytime-converter',
    title: 'Anytime Converter',
    tagline: 'Real-Time Sign Language Interpreter & Document Suite',
    description: 'Computer vision assistive tool powered by PyTorch BiGRU and MediaPipe 126D hand landmarks for real-time sign language recognition, paired with high-performance client-side PDF manipulation utilities.',
    domain: 'https://anytimeconverter.resence.in',
    domainLabel: 'anytimeconverter.resence.in',
    category: 'Utilities',
    techStack: ['Python', 'FastAPI WebSockets', 'PyTorch BiGRU', 'MediaPipe', 'JavaScript'],
    githubUrl: 'https://github.com/Piyush-Thakur7/miniproject',
    badge: 'CV & ML Research',
    imageUrl: '/images/hero-mesh.jpg'
  }
];

export const LEADERSHIP_HONORS: LeadershipItem[] = [
  {
    id: 'gsa-26',
    role: 'Google Student Ambassador (GSA \'26)',
    organization: 'Google India',
    period: '2026 – Present',
    description: 'Officially selected campus technology ambassador representing GL Bajaj Institute of Management. Leading GenAI workshops, Google Cloud codelabs, and student developer initiatives.',
    credentialId: 'Ambassador ID: 6403',
    highlightBadge: 'Official Google Ambassador'
  },
  {
    id: 'google-genai-academy',
    role: 'Cohort 3 Academy Graduate & Ideathon Builder',
    organization: 'Google Cloud & Hack2skill',
    period: 'Aug – Sep 2026',
    description: 'Completed intensive Google Cloud Generative AI Academy curriculum and codelabs. Built and deployed WellBridge AI on Google Cloud Run under #AccelerateAIwithCloudRun.',
    credentialId: 'Completed 04/09/2026',
    highlightBadge: 'Cloud Run & Vertex AI'
  },
  {
    id: 'razorpay-buildathon',
    role: 'AI Buildathon Project Submitter',
    organization: 'Razorpay AI Buildathon 2026',
    period: '2026',
    description: 'Architected and submitted RazorAgent MCP in Track 01 (AI Growth & Agentic Commerce), bridging autonomous AI agents with financial payment rails.',
    credentialId: 'Track 01 Submitter',
    highlightBadge: 'Agentic Commerce'
  },
  {
    id: 'msme-hackathon',
    role: 'Presentation Stage Finalist Team',
    organization: 'MSME Idea Hackathon 6.0',
    period: '2026',
    description: 'Presented ServeMATE social impact donation platform at the 1st-round presentation stage through the GL Bajaj Centre for Research & Incubation (GLBCRI).',
    credentialId: 'GLBCRI Nominated',
    highlightBadge: 'Startup Incubation'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'cert-1',
    title: 'Google Cloud Gen AI Academy Certificate of Completion',
    issuer: 'Google Cloud & Hack2skill',
    date: 'Sep 2026',
    credentialId: '#AccelerateAIwithCloudRun',
    category: 'Google Cloud'
  },
  {
    id: 'cert-2',
    title: 'IBM SkillsBuild: Getting Started with Artificial Intelligence',
    issuer: 'IBM SkillsBuild',
    date: 'Aug 2026',
    category: 'AI & ML'
  },
  {
    id: 'cert-3',
    title: 'Microsoft Azure Essentials Professional Certificate',
    issuer: 'Microsoft & LinkedIn Learning',
    date: 'Aug 2026',
    credentialId: '9294e8290a38af09f52bb6d59111ef3ae02c6ac84c70852dc650eb46a0b88a1d',
    category: 'Cloud & Systems'
  },
  {
    id: 'cert-4',
    title: 'Power BI for Data Analysis',
    issuer: 'Vodafone Idea Foundation (VI) & VOIS (Edunet)',
    date: 'Aug 2026',
    credentialId: 'VFLMS26_169089',
    category: 'Data & Analytics'
  },
  {
    id: 'cert-5',
    title: 'Foundation Course on AI Readiness',
    issuer: 'IICT, Google, YouTube & Ministry of I&B (Govt. of India)',
    date: 'Aug 2026',
    credentialId: 'IICT-15072655612',
    category: 'AI & ML'
  },
  {
    id: 'cert-6',
    title: 'Introduction to Modern AI',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    category: 'AI & ML'
  },
  {
    id: 'cert-7',
    title: 'Cyber Job Simulation Certificate',
    issuer: 'Deloitte (via Forage)',
    date: 'Jun 2026',
    credentialId: 'JBekHZ3i8qnTdMXH3',
    category: 'Security'
  },
  {
    id: 'cert-8',
    title: 'Google AI Essentials Specialization',
    issuer: 'Coursera (Google Career Certificates)',
    date: '2026',
    category: 'Google Cloud'
  },
  {
    id: 'cert-9',
    title: 'Google Prompting Essentials Specialization',
    issuer: 'Coursera (Google Career Certificates)',
    date: '2026',
    category: 'Google Cloud'
  },
  {
    id: 'cert-10',
    title: 'Social Media Masterclass Certificate',
    issuer: 'Social Media Masterclass Program',
    date: '2026',
    category: 'Data & Analytics'
  }
];

export const ACADEMIC_MODULES = [
  {
    subject: 'Probability & Statistics',
    code: 'BCA 3001T',
    focus: 'Frequency Distributions, Karl Pearson Correlation, PMF/PDF, Normal Distributions, Hypothesis Testing (Z-test, T-test, Chi-Square).'
  },
  {
    subject: 'Database Management Systems (DBMS)',
    code: 'BCA 3002T/P',
    focus: 'ER Modeling, Relational Algebra, Advanced SQL, 1NF–BCNF Normalization, ACID Transactions, 2PL Concurrency, and MongoDB NoSQL CRUD.'
  },
  {
    subject: 'Software Engineering',
    code: 'BCA 3003T',
    focus: 'Agile/Scrum Process Models, SRS Specifications, UML Diagrams, Black/White Box Testing, and SQA Release Reliability.'
  },
  {
    subject: 'Feature Engineering (AI/ML Elective)',
    code: 'BCA 3004T/P',
    focus: 'Data Imputation, Outlier Handling, Interaction Features, Filter/Wrapper Selection, and Principal Component Analysis (PCA).'
  },
  {
    subject: 'Python & Object-Oriented Programming',
    code: 'BCA 3007T/P',
    focus: 'OOP Inheritance & Polymorphism, NumPy Array Computing, File IO (JSON/CSV/Pickle), and Matplotlib Data Visualization.'
  }
];

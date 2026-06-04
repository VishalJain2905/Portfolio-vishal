export const profile = {
  name: 'Vishal Jain',
  initials: 'VJ',
  location: 'Indore, Madhya Pradesh 452010',
  phone: '+91-9993746976',
  email: 'princeprofessional3@gmail.com',
  linkedin: 'https://www.linkedin.com/in/vishal-jain-258bb2200/',
  github: 'https://github.com/VishalJain2905',
  tagline: 'Senior Software Engineer · AI Systems Builder',
  headline: 'Full-stack products, real-time platforms, and autonomous AI agents for modern companies.',
  motto: 'Ship fast. Scale smart. Never stop learning.',
  quote:
    'A good developer writes code. A great developer writes systems that others can build on.',
};

export const highlights = [
  { value: '3+', label: 'Years building products' },
  { value: '6+', label: 'Production projects' },
  { value: 'AI Agents', label: 'End-to-end automation' },
  { value: 'NestJS', label: 'Scalable APIs' },
];

export const aiDominate = {
  brand: 'AI Dominate',
  tagline: 'Your first AI-dominate company',
  headline: 'We generate your full AI agent workforce',
  subheadline:
    'Not chatbots. Not single prompts. A complete generative AI team — every role in your company, filled by specialized agents that plan, execute, and collaborate autonomously.',
  description:
    'AI Dominate helps businesses become AI-first: custom agent stacks wired into your workflows, data, and tools. From engineering and operations to growth and support — your company runs with silicon teammates built to dominate the work that slows you down.',
  pillars: [
    {
      title: 'Full company coverage',
      description: 'CEO, CTO, engineering, marketing, sales, and support agents — orchestrated to work together, not in silos.',
    },
    {
      title: 'Built on your stack',
      description: 'Integrations with your APIs, databases, CRMs, and internal tools. Agents act inside your real systems.',
    },
    {
      title: 'Generative & autonomous',
      description: 'LLM-powered reasoning, tool use, memory, and handoffs — so work completes end-to-end without constant human babysitting.',
    },
  ],
  agents: [
    { role: 'CEO Agent', focus: 'Strategy, priorities, and cross-team alignment' },
    { role: 'CTO Agent', focus: 'Architecture reviews, technical decisions, delivery oversight' },
    { role: 'Engineering Agent', focus: 'Code, APIs, integrations, and shipping features' },
    { role: 'Marketing Agent', focus: 'Campaigns, content, positioning, and growth experiments' },
    { role: 'Sales Agent', focus: 'Outreach, qualification, follow-ups, and pipeline updates' },
    { role: 'Support Agent', focus: 'Tickets, docs, customer replies, and escalation routing' },
  ],
  cta: 'Build your AI-dominate company',
};

export const education = [
  {
    institution: 'University Institute of Technology Barkatullah, Bhopal',
    period: 'October 2020 – June 2024',
    degree: 'B.Tech, Computer Science and Engineering',
    details: 'CGPA: 8.3',
  },
];

export const experience = [
  {
    company: 'Aurasoft Digitech Pvt. Ltd.',
    role: 'Intern · Full Stack Developer',
    period: 'September 2023 – May 2024',
    location: 'On-site',
    points: [
      'Developing and maintaining web applications optimised for various devices and browsers.',
      'Implementing responsive design and cross-browser compatibility for different screen sizes.',
      'Developing user-friendly and interactive web features such as buttons, forms, and menus.',
    ],
  },
  {
    company: 'Aurasoft Digitech Pvt. Ltd.',
    role: 'Full Stack Developer',
    period: 'June 2024 – July 2025',
    location: 'On-site',
    points: [
      'Built and maintained scalable RESTful APIs using NestJS with seamless front-end integration.',
      'Optimised performance, implemented security best practices, and managed database interactions for robust backend solutions.',
    ],
  },
  {
    company: 'Techvirtue Pvt. Ltd.',
    role: 'Senior Software Engineer',
    period: 'July 2025 – Present',
    location: 'On-site',
    points: [
      'Building and maintaining scalable RESTful APIs using NestJS with seamless front-end integration.',
      'Optimising performance, implementing security best practices, and managing database interactions for robust backend solutions.',
    ],
  },
];

export const projects = [
  {
    name: 'Hashium',
    url: 'https://hashium.com/',
    description:
      'Web3 portfolio tracker for monitoring crypto holdings, wallet performance, and on-chain assets in one unified dashboard.',
    tags: ['Web3', 'React', 'Portfolio'],
  },
  {
    name: 'Incoming Class',
    url: 'https://incomingclass.com/',
    description:
      'College community platform to find your squad — connect with classmates, discover groups, and build your network before campus starts.',
    tags: ['Next.js', 'Social', 'EdTech'],
  },
  {
    name: 'Ecommerce Website – Fully Automatic Ecom Shop',
    description: 'Scalable eCommerce platform using the MERN stack with secure payment integration and optimised performance. Advanced search and recommendation algorithms for an enhanced shopping experience.',
    tags: ['MERN', 'Payments', 'Search'],
  },
  {
    name: 'Abanonya Dating App',
    description: 'Real-time dating platform using Node.js, Express, and Next.js with dynamic user matching and messaging. Responsive UI with seamless navigation and profile management.',
    tags: ['Node.js', 'Next.js', 'Real-time'],
  },
  {
    name: 'UpDown Trip',
    description: 'Cab-sharing application using NestJS: user authentication, trip management, payment integration. Real-time ride matching, booking, and live tracking. Kafka for ride lifecycle messaging; Redis for driver location updates.',
    tags: ['NestJS', 'Kafka', 'Redis'],
  },
  {
    name: 'Haulermates',
    description: 'Social platform for truck drivers to connect during breaks. Location-based discovery of rest areas, service stations, and peers. Kafka for live location events; Redis for real-time updates and proximity-based discovery.',
    tags: ['Kafka', 'Redis', 'Location'],
  },
  {
    name: 'Quick Support – Multi-Profile Management',
    description: 'System for managing multiple profiles across platforms. Smooth authentication, role-based access, and seamless profile switching.',
    tags: ['Auth', 'RBAC'],
  },
  {
    name: 'Safiride',
    description: 'Uber-like electric bike ride-hailing platform for eco-friendly, on-demand roadside pickups. Real-time booking, driver allocation, payment processing. Kafka for ride event streaming; Redis for driver location tracking and e-ride workflow.',
    tags: ['NestJS', 'Kafka', 'Redis'],
  },
];

export const skills = {
  languages: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  frontend: ['React.js', 'Next.js', 'AngularJs', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'Material-UI (MUI)'],
  backend: ['Node.js', 'Express.js', 'NestJS', 'Java Spring Boot'],
  databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
  messaging: ['Kafka', 'Redis'],
  api: ['RESTful APIs', 'gRPC', 'Microservices'],
  devops: ['Git', 'GitHub', 'Postman', 'VS Code'],
  auth: ['JWT', 'OAuth'],
  cloud: ['AWS', 'Render', 'Vercel'],
  soft: ['Leadership', 'Teamwork', 'Communication', 'Discipline', 'Observation'],
  interests: ['Web Development', 'Microservices Architecture', 'Machine Learning'],
};

import {
  Code2,
  Server,
  Database,
  LayoutDashboard,
  Cloud,
  Radio,
  BrainCircuit,
  ShieldCheck,
} from 'lucide-react';

export type Skill = {
  title: string;
  summary: string;
  description: string[];
  icon: typeof Code2;
};

export const skills: Skill[] = [
  {
    title: 'Languages',
    summary:
      'TypeScript-first for type-safe backends; Python for AI, automation, and FastAPI services.',
    description: ['TypeScript', 'JavaScript (ES6+)', 'Python'],
    icon: Code2,
  },
  {
    title: 'Frontend',
    summary:
      'React and Next.js interfaces built against the APIs I design, from dashboards to full product sites.',
    description: ['React', 'Next.js'],
    icon: LayoutDashboard,
  },
  {
    title: 'Backend',
    summary:
      'Node.js/NestJS for real-time and modular services; FastAPI for ML and async workloads.',
    description: ['Node.js', 'NestJS', 'FastAPI', 'Express.js'],
    icon: Server,
  },
  {
    title: 'Data Layer',
    summary:
      'Polyglot persistence, relational, document, and in-memory stores chosen per workload, with typed access through Prisma and Drizzle.',
    description: [
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'Prisma',
      'Drizzle',
      'Mongoose',
    ],
    icon: Database,
  },
  {
    title: 'Cloud & DevOps',
    summary:
      'Containerized deployments on AWS, automated through CI/CD and reverse-proxied on Linux.',
    description: [
      'Docker',
      'AWS (EC2, S3)',
      'Nginx',
      'Caddy',
      'GitHub Actions',
    ],
    icon: Cloud,
  },
  {
    title: 'Realtime',
    summary:
      'Live streaming (RTMP → HLS via mediamtx), signaling, and queue-driven background processing at product scale.',
    description: ['Socket.IO', 'WebRTC', 'BullMQ', 'Redis Pub/Sub', 'mediamtx'],
    icon: Radio,
  },
  {
    title: 'AI & LLM',
    summary:
      'Production AI features, RAG pipelines, tool calling, and vector search over self-hosted or OpenAI models.',
    description: ['OpenAI API', 'Ollama', 'RAG', 'Vector Search'],
    icon: BrainCircuit,
  },
  {
    title: 'Security & Auth',
    summary:
      'Auth flows shipped to production, JWT, Google OAuth with JWKS verification, Redis-backed OTP, 2FA, and RBAC.',
    description: ['JWT', 'OAuth 2.0', '2FA & OTP', 'RBAC'],
    icon: ShieldCheck,
  },
];

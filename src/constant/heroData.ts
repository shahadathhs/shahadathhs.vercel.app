export type CodeLineSegment = {
  text: string;
  variant?: 'default' | 'key' | 'string' | 'punct';
};

export type CodeLine = {
  indent?: number;
  segments: CodeLineSegment[];
};

export type QuickStat = {
  label: string;
  value: string;
};

export const heroData = {
  name: 'Shahadath Hossen Sajib',
  shortName: 'Sajib',
  role: 'Full Stack Engineer',
  location: 'Dhaka, Bangladesh',
  availability: 'Open to full stack and backend-focused opportunities',

  greeting: "Hey, I'm",

  typewriterWords: [
    'Full Stack Engineer',
    'Backend-Focused Builder',
    'Node.js & NestJS Specialist',
    'TypeScript & Python Developer',
    'AI-Integrated Systems Builder',
  ],

  tagline:
    'Full stack engineer, backend-focused, building microservices and AI powered systems with Node.js, TypeScript, and Python. Writes about them after midnight. You are welcome to deploy.',

  resumeLink:
    'https://drive.google.com/file/d/1dtZCEgZyof-qrUreeVpXDlOovosegpuf/view',
  githubLink: 'https://github.com/shahadathhs',

  quickStats: [
    { label: 'Years Experience', value: '2+' },
    { label: 'Focus', value: 'Microservices' },
    { label: 'AI/LLM', value: 'RAG & Agents' },
  ] as QuickStat[],

  codeSnippet: {
    className: 'FullStackEngineer',
    lines: [
      {
        indent: 1,
        segments: [
          { text: 'name', variant: 'key' },
          { text: ' = [', variant: 'punct' },
          { text: "'Sajib'", variant: 'string' },
          { text: ']', variant: 'punct' },
        ],
      },
      {
        indent: 1,
        segments: [
          { text: 'role', variant: 'key' },
          { text: ' = [', variant: 'punct' },
          { text: "'Full Stack Engineer'", variant: 'string' },
          { text: ']', variant: 'punct' },
        ],
      },
      {
        indent: 1,
        segments: [
          { text: 'stack', variant: 'key' },
          { text: ' = [', variant: 'punct' },
          {
            text: "'React', 'Next.js', 'NestJS', 'FastAPI'",
            variant: 'string',
          },
          { text: ']', variant: 'punct' },
        ],
      },
      {
        indent: 1,
        segments: [
          { text: 'languages', variant: 'key' },
          { text: ' = [', variant: 'punct' },
          { text: "'TypeScript', 'Python'", variant: 'string' },
          { text: ']', variant: 'punct' },
        ],
      },
      {
        indent: 1,
        segments: [
          { text: 'databases', variant: 'key' },
          { text: ' = [', variant: 'punct' },
          { text: "'PostgreSQL', 'MongoDB'", variant: 'string' },
          { text: ']', variant: 'punct' },
        ],
      },
      {
        indent: 1,
        segments: [
          { text: 'architecture', variant: 'key' },
          { text: ' = [', variant: 'punct' },
          { text: "'Microservices'", variant: 'string' },
          { text: ']', variant: 'punct' },
        ],
      },
      {
        indent: 1,
        segments: [
          { text: 'ai', variant: 'key' },
          { text: ' = [', variant: 'punct' },
          { text: "'RAG', 'Tool Calling'", variant: 'string' },
          { text: ']', variant: 'punct' },
        ],
      },
      {
        indent: 1,
        segments: [
          { text: 'deploy', variant: 'key' },
          { text: ' = [', variant: 'punct' },
          { text: "'Docker', 'AWS', 'CI/CD'", variant: 'string' },
          { text: ']', variant: 'punct' },
        ],
      },
    ] as CodeLine[],
  },
};

export type HeroData = typeof heroData;

/** Pinned repos shown in the Projects deck (one per slide). */
export const PINNED_REPOS = [
  'systemix',
  'DropGrid',
  'Algomind',
  'adda',
  'voice-to-text',
] as const;

/** Live demo URLs, only for the pinned repos that are deployed. */
export const projectDemos: Record<string, string> = {
  systemix: 'https://systemix.vercel.app/',
  DropGrid: 'https://playdropgrid.vercel.app/',
  Algomind: 'https://playalgomind.vercel.app/',
};

/** Curated highlights per project, shown as bullets on the project card. */
export const projectHighlights: Record<string, string[]> = {
  adda: [
    'Full-stack monorepo, FastAPI backend, React 19 + TypeScript frontend, mediamtx streaming server, single Docker Compose deploy',
    'Live streaming pipeline: RTMP ingest → HLS playback with per-community stream keys, publish-auth webhooks, and auto-recordings',
    'Real-time layer, WebSocket gateway with typed protocol, Redis pub/sub fan-out for multi-instance scaling, and presence tracking',
    'Complete auth suite: JWT, Google OAuth, passwordless OTP login (Redis-backed), 2FA, and RBAC roles',
  ],
  'voice-to-text': [
    'AI transcription service built on OpenAI Whisper, usable as a CLI tool or a FastAPI REST server',
    'Speaker diarization (SpeechBrain embeddings) labels who spoke what; non-English audio translates to English',
    'Fully local, audio never leaves the machine; pluggable Whisper backends (OpenAI or Hugging Face)',
    'One-command Docker deployment, Pydantic v2 validation, Ruff/MyPy/Bandit quality gates with CI',
  ],
  DropGrid: [
    'Offline-first Android falling-block puzzle game built in Godot, with five game modes, persistent local statistics, and configurable controls',
    'Optional account-based score synchronization and global leaderboards served by a FastAPI backend',
    'Next.js website alongside the game; automated testing and APK build workflows with Docker and CI/CD',
  ],
  Algomind: [
    'Offline-first Android logic puzzle in Godot where players program an automaton with instruction tiles, loops, and conditions',
    'Deterministic simulator with a shortest-solution solver',
    'NestJS/Prisma API, Next.js level-authoring dashboard, and public site in one monorepo, so new levels ship as data without an app update',
  ],
  systemix: [
    'A "standard library" for modern Node.js, 11 packages published to npm and GitHub Packages',
    'Cryptographically secure generators: passwords with character guarantees, passphrases, and signed tokens (hex/base64) built on Node crypto',
    'Typed env loading and validation, shareable ESLint 10 flat configs, TypeScript bases, and a minimal test runner',
    'Turborepo + pnpm monorepo, tsup bundling, full type safety, built for both small projects and large monorepos',
  ],
};

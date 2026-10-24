/** Pinned repos shown in the Projects deck (one per slide). */
export const PINNED_REPOS = [
  'systemix',
  'adda',
  'DropGrid',
  'voice-studio',
  'Algomind',
  'GuliBatto',
] as const;

/** Live demo URLs, only for the pinned repos that are deployed. */
export const projectDemos: Record<string, string> = {
  systemix: 'https://systemix.vercel.app/',
  DropGrid: 'https://playdropgrid.vercel.app/',
  Algomind: 'https://playalgomind.vercel.app/',
  GuliBatto: 'https://playgulibatto.vercel.app',
  'voice-studio': 'https://getvoicestudio.vercel.app',
};

/** Curated highlights per project, shown as bullets on the project card. */
export const projectHighlights: Record<string, string[]> = {
  adda: [
    'Full-stack monorepo, FastAPI backend, React 19 + TypeScript frontend, mediamtx streaming server, single Docker Compose deploy',
    'Live streaming pipeline: RTMP ingest → HLS playback with per-community stream keys, publish-auth webhooks, and auto-recordings',
    'Real-time layer, WebSocket gateway with typed protocol, Redis pub/sub fan-out for multi-instance scaling, and presence tracking',
    'Complete auth suite: JWT, Google OAuth, passwordless OTP login (Redis-backed), 2FA, and RBAC roles',
  ],
  'voice-studio': [
    'Offline desktop app and CLI that transcribes audio and video, labels who said what, and reads text aloud, with nothing leaving your machine',
    'Rust core with whisper.cpp transcription, pyannote and WeSpeaker speaker labels, Kokoro speech, and Chatterbox voice cloning, shared by the app and the CLI',
    'Tauri 2 shell with a Svelte interface calling the core in-process: a resumable transcription queue, full-text library search, and local summaries and translation',
    'Cross-platform Rust, TypeScript, and Svelte codebase with CI, checksum-verified model downloads, and a landing site',
  ],
  DropGrid: [
    'Offline-first Android falling-block puzzle game built in Godot, with five game modes, persistent local statistics, and configurable controls',
    'Optional account-based score synchronization and global leaderboards served by a FastAPI backend',
    'Next.js website alongside the game; automated testing and APK build workflows with Docker and CI/CD',
  ],
  GuliBatto: [
    'Free, offline 3D marble game: four traditional Bangladeshi games rebuilt with real rigid-body physics, so every shot can be learned',
    'One Godot 4 project with Jolt physics exports to Android and to the browser; the web version is the full game, not a demo',
    'Rules decided once from where the marbles rest, with every rule tested on a hand-built board and real input driven through whole games',
    'Next.js site on Vercel, with a Docker-based export pipeline, GitHub Releases and a design-token source shared by game and site',
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

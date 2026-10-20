import React from 'react';
import { ImageResponse } from 'next/og';
import fs from 'node:fs';
import path from 'node:path';
import { heroData } from '../src/constant/heroData';

/**
 * Renders public/github-banner.png: 1584x396, the LinkedIn cover ratio, also
 * the README banner. LinkedIn covers the bottom-left with the profile photo
 * and crops the sides on mobile, so everything important lives in the
 * central terminal window and the outer areas are pure ambience.
 */
const WIDTH = 1584;
const HEIGHT = 396;
const OUT = path.join(process.cwd(), 'public', 'github-banner.png');

const font = (file: string) =>
  fs.readFileSync(path.join(process.cwd(), 'scripts', 'fonts', file));

const FONTS = [
  { name: 'Inter', data: font('inter-latin-400-normal.woff'), weight: 400 },
  { name: 'Inter', data: font('inter-latin-700-normal.woff'), weight: 700 },
  {
    name: 'Mono',
    data: font('jetbrains-mono-latin-400-normal.woff'),
    weight: 400,
  },
  {
    name: 'Mono',
    data: font('jetbrains-mono-latin-700-normal.woff'),
    weight: 700,
  },
] as const;

const stack = ['TypeScript', 'React', 'Next.js', 'NestJS', 'FastAPI', 'Docker'];
const stats = [
  { value: '2+', label: 'years in production' },
  { value: 'RAG', label: 'AI & agents' },
  { value: '20+', label: 'sites shipped' },
];

const DIM = '#737373';
const GREEN = '#4ade80';

const dot = (color: string) => (
  <div
    style={{
      width: 12,
      height: 12,
      borderRadius: 99,
      background: color,
      display: 'flex',
    }}
  />
);

const response = new ImageResponse(
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0b',
      backgroundImage:
        'radial-gradient(ellipse at 50% 120%, rgba(74,222,128,0.22), transparent 60%), radial-gradient(ellipse at 10% 0%, rgba(255,255,255,0.08), transparent 45%)',
      fontFamily: 'Inter',
      color: '#e5e5e5',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 1000,
        height: 292,
        marginLeft: 120,
        borderRadius: 14,
        border: '1px solid rgba(255,255,255,0.14)',
        background: 'rgba(14,14,16,0.92)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
        overflow: 'hidden',
      }}
    >
      {/* Title bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          height: 38,
          padding: '0 16px',
          background: 'rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {dot('#ff5f57')}
        {dot('#febc2e')}
        {dot('#28c840')}
        <div
          style={{
            display: 'flex',
            marginLeft: 14,
            fontFamily: 'Mono',
            fontSize: 14,
            color: DIM,
          }}
        >
          sajib@portfolio: ~
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          display: 'flex',
          flex: 1,
          padding: '22px 34px',
          gap: 30,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: 10,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontFamily: 'Mono',
              fontSize: 18,
              color: DIM,
            }}
          >
            <span style={{ color: GREEN, marginRight: 10 }}>$</span> whoami
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 54,
              fontWeight: 700,
              letterSpacing: -2,
              color: '#fafafa',
              lineHeight: 1.05,
            }}
          >
            {heroData.name}
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Mono',
              fontSize: 21,
              color: GREEN,
            }}
          >
            Full Stack Engineer · Backend-Focused
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
            {stack.map((s) => (
              <span
                key={s}
                style={{
                  display: 'flex',
                  padding: '5px 12px',
                  fontFamily: 'Mono',
                  fontSize: 15,
                  borderRadius: 6,
                  border: '1px solid rgba(255,255,255,0.16)',
                  background: 'rgba(255,255,255,0.05)',
                }}
              >
                {s}
              </span>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 'auto',
              fontFamily: 'Mono',
              fontSize: 16,
              color: DIM,
            }}
          >
            <span style={{ color: GREEN, marginRight: 10 }}>$</span>
            open shahadathhs.vercel.app
            <div
              style={{
                display: 'flex',
                width: 9,
                height: 18,
                marginLeft: 6,
                background: GREEN,
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 14,
            width: 190,
            paddingLeft: 26,
            borderLeft: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 30,
                  fontWeight: 700,
                  color: '#fafafa',
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontFamily: 'Mono',
                  fontSize: 13,
                  color: DIM,
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>,
  { width: WIDTH, height: HEIGHT, fonts: [...FONTS] },
);

fs.writeFileSync(OUT, Buffer.from(await response.arrayBuffer()));
console.log(`Wrote ${OUT}`);

import type { ReactNode } from 'react';
import { neurobotChannels, neurobotChannelsNote } from '../../data/neurobotPage';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const icons: Record<(typeof neurobotChannels)[number]['id'], ReactNode> = {
  inbound: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 4.5h2.2l1.2 3.4-1.6 1.2a10 10 0 004.5 4.5l1.2-1.6 3.4 1.2v2.2c0 1-.8 1.8-1.8 1.8C9.9 17.2 4.8 12.1 4.8 6.3c0-1 .8-1.8 1.8-1.8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M19.5 4.5l-4 4M15.5 5.5v3h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  outbound: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 4.5h2.2l1.2 3.4-1.6 1.2a10 10 0 004.5 4.5l1.2-1.6 3.4 1.2v2.2c0 1-.8 1.8-1.8 1.8C9.9 17.2 4.8 12.1 4.8 6.3c0-1 .8-1.8 1.8-1.8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M15.5 8.5l4-4M16.5 4.5h3v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  text: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 6.5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v7c0 1.1-.9 2-2 2h-5l-4 3.5v-3.5H7c-1.1 0-2-.9-2-2v-7z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M8.5 9h7M8.5 12h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export function NbChannels() {
  return (
    <section className="section nb-channels" id="nb-channels" aria-labelledby="nb-channels-title">
      <div className="container">
        <Reveal>
          <SectionHeader title="Один нейробот — разные задачи и каналы" titleId="nb-channels-title" />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="nb-channels__panel" radius="xl" depth="raised" tint="cyan" tier="matte">
            <div className="nb-channels__zones">
              {neurobotChannels.map((zone) => (
                <article key={zone.id} className={`nb-channels__zone nb-channels__zone--${zone.id}`}>
                  <span className="nb-channels__icon">{icons[zone.id]}</span>
                  <h3>{zone.title}</h3>
                  <p>{zone.text}</p>
                  <p className="nb-channels__examples-label">Например</p>
                  <ul>
                    {zone.examples.map((example) => (
                      <li key={example}>{example}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </GlassSurface>
        </Reveal>

        <Reveal>
          <p className="nb-channels__note">{neurobotChannelsNote}</p>
        </Reveal>
      </div>
    </section>
  );
}

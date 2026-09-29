import type { ReactNode } from 'react';
import { channelBlocks, channelBotNote } from '../../data/contactCenterPage';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const icons: Record<(typeof channelBlocks)[number]['id'], ReactNode> = {
  channels: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.6 4.5h2.2l1.2 3.4-1.6 1.2a10 10 0 004.5 4.5l1.2-1.6 3.4 1.2v2.2c0 1-.8 1.8-1.8 1.8C9.9 17.2 4.8 12.1 4.8 6.3c0-1 .8-1.8 1.8-1.8z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14.5 4.5h5v4h-3l-2 1.5v-5.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  routing: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="5.5" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18.5" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18.5" cy="12" r="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18.5" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 12h9M7.2 11l9.4-4.3M7.2 13l9.4 4.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  history: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4.5 12a7.5 7.5 0 102.2-5.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4.5 4.5v3h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8v4.2l2.8 1.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  handoff: (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="7" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 18c.8-2.6 2.2-3.8 4-3.8M21 18c-.8-2.6-2.2-3.8-4-3.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 15.5h4M12.5 13.8l1.7 1.7-1.7 1.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

export function CcChannels() {
  return (
    <section className="section cc-channels" id="cc-channels" aria-labelledby="cc-channels-title">
      <div className="container cc-channels__layout">
        <div className="cc-channels__intro">
          <Reveal>
            <SectionHeader
              title="Обращения из разных каналов — по единым правилам обработки"
              titleId="cc-channels-title"
            />
          </Reveal>
          <Reveal delay={60}>
            <aside className="cc-channels__bot">
              <span className="cc-channels__bot-mark" aria-hidden="true">
                MAX · виджет
              </span>
              <p>{channelBotNote}</p>
            </aside>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <GlassSurface className="cc-channels__panel" radius="xl" depth="raised" tint="blue" tier="matte">
            <ul className="cc-channels__list">
              {channelBlocks.map((block) => (
                <li key={block.id} className="cc-channels__item">
                  <span className="cc-channels__icon">{icons[block.id]}</span>
                  <div>
                    <h3>{block.title}</h3>
                    <p>{block.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

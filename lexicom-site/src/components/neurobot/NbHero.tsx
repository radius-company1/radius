import { neurobotHeroFrame } from '../../data/neurobotPage';
import { productDemoById, resolveDemoAsset } from '../../data/productDemos';
import { scrollToLexaDemo } from '../../hooks/scrollBelowChrome';
import { ProductBreadcrumbs } from '../ProductBreadcrumbs';
import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';

type NbHeroProps = {
  onPlay: (trigger: HTMLButtonElement) => void;
  onDiscuss: () => void;
};

const demo = productDemoById.neurobot;

export function NbHero({ onPlay, onDiscuss }: NbHeroProps) {
  return (
    <section className="nb-hero section-zone" id="nb-top" aria-labelledby="nb-hero-title">
      <div className="container">
        <ProductBreadcrumbs current="Нейробот" />

        <div className="nb-hero__grid">
          <div className="nb-hero__content">
            <Reveal>
              <p className="nb-hero__eyebrow">Нейробот Lexicom</p>
            </Reveal>
            <Reveal delay={60}>
              <h1
                id="nb-hero-title"
                className="nb-hero__title"
                style={{ viewTransitionName: 'hero-title' } as React.CSSProperties}
              >
                Голосовой и текстовый ИИ для обращений клиентов
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="nb-hero__lead">
                Принимает звонки, проводит исходящие обзвоны и отвечает в чатах. Консультирует по базе знаний,
                выполняет согласованные действия в системах заказчика и передаёт сложные вопросы сотруднику вместе
                с контекстом.
              </p>
              <p className="nb-hero__note">Собственная разработка Lexicom. Настройка под процессы вашей организации.</p>
            </Reveal>
            <Reveal delay={160}>
              <div className="nb-hero__actions">
                <Button onClick={(event) => onPlay(event.currentTarget as HTMLButtonElement)}>
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M10 8.2v7.6L16.5 12 10 8.2z" fill="currentColor" />
                  </svg>
                  Послушать пример диалога
                </Button>
                <Button variant="secondary" href="#lexa-demo" onClick={scrollToLexaDemo}>
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path
                      d="M7.2 3.8h2.1l1.1 3.2-1.7 1.1a9.2 9.2 0 004.2 4.2l1.1-1.7 3.2 1.1v2.1c0 .9-.7 1.6-1.6 1.6C10.2 15.4 5.6 10.8 5.6 5.4c0-.9.7-1.6 1.6-1.6z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Поговорить с Лексой
                </Button>
                <Button variant="secondary" onClick={onDiscuss}>
                  Обсудить внедрение
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <GlassSurface
              className="nb-hero__preview"
              radius="xl"
              depth="float"
              tint="cyan"
              style={{ viewTransitionName: 'hero-viz' } as React.CSSProperties}
            >
              <button
                type="button"
                className="nb-hero__video"
                onClick={(event) => onPlay(event.currentTarget)}
                aria-label={`Смотреть видео: ${neurobotHeroFrame.caption}, ${demo.durationLabel}`}
              >
                <img
                  src={resolveDemoAsset(neurobotHeroFrame.src)}
                  alt={neurobotHeroFrame.alt}
                  width={neurobotHeroFrame.width}
                  height={neurobotHeroFrame.height}
                  decoding="async"
                />
                <span className="nb-hero__play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="26" height="26">
                    <path d="M9 6.8v10.4L17.5 12 9 6.8z" fill="currentColor" />
                  </svg>
                </span>
                <span className="nb-hero__duration" aria-hidden="true">
                  {demo.durationLabel}
                </span>
              </button>
              <p className="nb-hero__caption">{neurobotHeroFrame.caption}</p>
            </GlassSurface>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

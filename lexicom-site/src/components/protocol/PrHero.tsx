import { prHeroShot, type ProtocolShot } from '../../data/protocolPage';
import { CcShot } from '../contact-center/CcShot';
import { ProductBreadcrumbs } from '../ProductBreadcrumbs';
import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';

type PrHeroProps = {
  onWatchVideo: (trigger: HTMLButtonElement) => void;
  onDiscuss: () => void;
  onOpenShot: (shot: ProtocolShot, trigger: HTMLButtonElement) => void;
};

export function PrHero({ onWatchVideo, onDiscuss, onOpenShot }: PrHeroProps) {
  return (
    <section className="cc-hero pr-hero section-zone" id="pr-top" aria-labelledby="pr-hero-title">
      <div className="container">
        <ProductBreadcrumbs current="Протоколирование" />

        <div className="cc-hero__grid">
          <div className="cc-hero__content">
            <Reveal>
              <p className="cc-hero__eyebrow">Протоколирование Lexicom</p>
            </Reveal>
            <Reveal delay={60}>
              <h1
                id="pr-hero-title"
                className="cc-hero__title"
                style={{ viewTransitionName: 'hero-title' } as React.CSSProperties}
              >
                Стенограмма и протокол совещания по записи
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="cc-hero__lead">
                Распознаёт речь в аудио- и видеозаписях, разделяет участников и формирует стенограмму. По стенограмме
                готовит протокол: решения, задачи, ответственных и сроки.
              </p>
              <p className="cc-hero__note">Собственная разработка Lexicom. Развёртывание в инфраструктуре заказчика.</p>
            </Reveal>
            <Reveal delay={160}>
              <div className="cc-hero__actions">
                <Button onClick={(event) => onWatchVideo(event.currentTarget as HTMLButtonElement)}>
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M10 8.2v7.6L16.5 12 10 8.2z" fill="currentColor" />
                  </svg>
                  Посмотреть обработку записи
                </Button>
                <Button variant="secondary" onClick={onDiscuss}>
                  Обсудить внедрение
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <GlassSurface
              className="cc-hero__visual"
              radius="xl"
              depth="float"
              tint="cyan"
              style={{ viewTransitionName: 'hero-viz' } as React.CSSProperties}
            >
              <CcShot
                shot={prHeroShot}
                onOpen={onOpenShot}
                priority
                sizes="(min-width: 1024px) 640px, calc(100vw - 3rem)"
              />
              <p className="cc-hero__caption">{prHeroShot.caption}</p>
            </GlassSurface>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

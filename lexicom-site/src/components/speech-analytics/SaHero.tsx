import { saHeroShot, type SpeechAnalyticsShot } from '../../data/speechAnalyticsPage';
import { CcShot } from '../contact-center/CcShot';
import { ProductBreadcrumbs } from '../ProductBreadcrumbs';
import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';

type SaHeroProps = {
  onWatchVideo: (trigger: HTMLButtonElement) => void;
  onDiscuss: () => void;
  onOpenShot: (shot: SpeechAnalyticsShot, trigger: HTMLButtonElement) => void;
};

export function SaHero({ onWatchVideo, onDiscuss, onOpenShot }: SaHeroProps) {
  return (
    <section className="cc-hero sa-hero section-zone" id="sa-top" aria-labelledby="sa-hero-title">
      <div className="container">
        <ProductBreadcrumbs current="Речевая аналитика" />

        <div className="cc-hero__grid">
          <div className="cc-hero__content">
            <Reveal>
              <p className="cc-hero__eyebrow">Речевая аналитика Lexicom</p>
            </Reveal>
            <Reveal delay={60}>
              <h1
                id="sa-hero-title"
                className="cc-hero__title"
                style={{ viewTransitionName: 'hero-title' } as React.CSSProperties}
              >
                Анализ разговоров и качества обслуживания
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="cc-hero__lead">
                Расшифровывает записи разговоров, оценивает работу операторов по вашим чек-листам, определяет темы
                и причины обращений. Показывает, где теряется качество, и даёт рекомендации сотрудникам
                и руководителям.
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
                  Посмотреть разбор разговора
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
              tint="blue"
              style={{ viewTransitionName: 'hero-viz' } as React.CSSProperties}
            >
              <CcShot
                shot={saHeroShot}
                onOpen={onOpenShot}
                priority
                sizes="(min-width: 1024px) 640px, calc(100vw - 3rem)"
              />
              <p className="cc-hero__caption">{saHeroShot.caption}</p>
            </GlassSurface>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

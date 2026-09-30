import { heroShot, type ContactCenterShot } from '../../data/contactCenterPage';
import { ProductBreadcrumbs } from '../ProductBreadcrumbs';
import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { CcShot } from './CcShot';

type CcHeroProps = {
  onWatchVideo: (trigger: HTMLButtonElement) => void;
  onDiscuss: () => void;
  onOpenShot: (shot: ContactCenterShot, trigger: HTMLButtonElement) => void;
};

export function CcHero({ onWatchVideo, onDiscuss, onOpenShot }: CcHeroProps) {
  return (
    <section className="cc-hero section-zone" id="cc-top" aria-labelledby="cc-hero-title">
      <div className="container">
        <ProductBreadcrumbs current="Контактный центр" />

        <div className="cc-hero__grid">
          <div className="cc-hero__content">
            <Reveal>
              <p className="cc-hero__eyebrow">Контактный центр Lexicom</p>
            </Reveal>
            <Reveal delay={60}>
              <h1
                id="cc-hero-title"
                className="cc-hero__title"
                style={{ viewTransitionName: 'hero-title' } as React.CSSProperties}
              >
                Контактный центр с ИИ{'\u2011'}помощью оператору
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="cc-hero__lead">
                Объединяйте звонки и текстовые обращения в одном рабочем пространстве. Управляйте очередями,
                сохраняйте историю взаимодействий и помогайте сотрудникам отвечать с подсказками ИИ-суфлёра.
              </p>
              <p className="cc-hero__note">Собственное ПО Lexicom. Развёртывание в инфраструктуре заказчика.</p>
            </Reveal>
            <Reveal delay={160}>
              <div className="cc-hero__actions">
                <Button onClick={(event) => onWatchVideo(event.currentTarget as HTMLButtonElement)}>
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M10 8.2v7.6L16.5 12 10 8.2z" fill="currentColor" />
                  </svg>
                  Посмотреть работу КЦ
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
                shot={heroShot}
                onOpen={onOpenShot}
                priority
                sizes="(min-width: 1024px) 640px, calc(100vw - 3rem)"
              />
              <p className="cc-hero__caption">{heroShot.caption}</p>
            </GlassSurface>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Button } from './ui/Button';
import { HeroVisualization } from './HeroVisualization';
import { Reveal } from './ui/Reveal';

type HeroProps = {
  onDiscussClick: () => void;
};

export function Hero({ onDiscussClick }: HeroProps) {
  return (
    <section className="hero section-zone section-zone--hero" id="top" aria-labelledby="hero-title">
      <div className="hero__atmosphere" aria-hidden="true" />
      <div className="container hero__grid">
        <div className="hero__content">
          <Reveal>
            <p className="hero__eyebrow">Российский вендор собственного программного обеспечения</p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="hero__title"
              style={{ viewTransitionName: 'hero-title' } as React.CSSProperties}
            >
              <span className="hero__title-line">
                Единая <span className="hero__title-compound">ИИ-платформа</span>
              </span>
              <span className="hero__title-line">для работы с</span>
              <span className="hero__title-line">обращениями</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="hero__lead">
              Lexicom объединяет ИИ-ассистентов, контактный центр, базу знаний, робот-суфлёр и речевую аналитику.
              Платформа принимает звонки и сообщения, обрабатывает типовые вопросы и передаёт сложные обращения
              сотрудникам вместе с собранной информацией. Решение разворачивается в инфраструктуре заказчика и
              подключается к действующим каналам и информационным системам.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="hero__actions">
              <Button href="#directions">Выбрать своё направление</Button>
              <Button variant="secondary" onClick={onDiscussClick}>
                Обсудить проект
              </Button>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <p className="hero__trust">
              Собственное ПО · On-prem · Данные в контуре заказчика ·{' '}
              <span className="hero__trust-reg">Реестр российского ПО №11115</span>
            </p>
          </Reveal>
        </div>

        <Reveal className="hero__viz-wrap" delay={120}>
          <HeroVisualization />
        </Reveal>
      </div>
    </section>
  );
}

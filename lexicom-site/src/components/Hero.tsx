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
                <span className="hero__title-compound">ИИ-продукты</span> для
              </span>
              <span className="hero__title-line">коммуникаций и работы</span>
              <span className="hero__title-line">с речью</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="hero__lead">
              Нейроботы, контактный центр, речевая аналитика и системы протоколирования совещаний и судебных
              заседаний. Собственное программное обеспечение Lexicom адаптируется под процессы организации и может
              разворачиваться в инфраструктуре заказчика.
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

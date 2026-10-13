import { scrollToLexaDemo } from '../hooks/scrollBelowChrome';
import { Button } from './ui/Button';
import { HeroVisualization } from './HeroVisualization';
import { Reveal } from './ui/Reveal';

export function Hero() {
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
                <span className="hero__title-compound">ИИ-платформа</span>
              </span>
              <span className="hero__title-line">для обращений</span>
              <span className="hero__title-line">и работы с речью</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="hero__lead">
              Разрабатываем нейробота, контактный центр с суфлёром, речевую аналитику и протоколирование для
              организаций, которые принимают обращения и работают с речью. Собственное ПО Lexicom — в инфраструктуре
              заказчика и под его процессы.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="hero__actions">
              <Button href="#products">Выбрать решение</Button>
              <Button variant="secondary" href="#lexa-demo" onClick={scrollToLexaDemo}>
                Поговорить с Лексой
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero__viz-wrap" delay={120}>
          <HeroVisualization />
        </Reveal>
      </div>

      <div className="container">
        <Reveal delay={240}>
          <p className="hero__trust">
            Собственное ПО · On-prem · Данные в контуре заказчика ·{' '}
            <span className="hero__trust-reg">Реестр российского ПО №11115</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

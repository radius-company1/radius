import { Button } from './ui/Button';
import { GlassSurface } from './ui/GlassSurface';
import { metrics } from '../data/metrics';

export function DesignHero() {
  return <>
    <section className="design-hero" id="top" aria-labelledby="hero-title">
      <div className="container design-hero__grid">
        <div className="design-hero__copy">
          <h1 id="hero-title">ИИ-платформа<br />для обращений<br />и работы с речью</h1>
          <p className="design-hero__lead">ИИ-агент, контактный центр, речевая аналитика и протоколирование — в инфраструктуре вашей организации.</p>
          <div className="design-hero__actions">
            <Button href="#products">Выбрать решение <span aria-hidden="true">↗</span></Button>
            <a href="#platform" className="design-text-link">Как работает платформа <span aria-hidden="true">↓</span></a>
          </div>
          <p className="design-hero__trust">Собственное российское ПО<br /><span>Данные в контуре заказчика · Реестр ПО №11115</span></p>
        </div>
        <GlassSurface className="design-flow" radius="xl" tint="cyan">
          <div className="design-flow__heading"><strong>От обращения к результату</strong><span>Lexicom</span></div>
          <div className="design-flow__input">Звонки, чаты и сообщения</div>
          <div className="design-flow__connector" aria-hidden="true" />
          <div className="design-flow__handlers">
            <div><strong>ИИ-агент</strong><span>Типовые обращения</span></div>
            <span className="design-flow__handoff" aria-label="передача контекста">→</span>
            <div><strong>Сотрудник</strong><span>Сложные вопросы</span></div>
          </div>
          <p className="design-flow__context">База знаний <span aria-hidden="true">·</span> Системы заказчика</p>
          <div className="design-flow__connector" aria-hidden="true" />
          <div className="design-flow__result"><span className="design-flow__bars" aria-hidden="true"><i /><i /><i /><i /><i /></span><div><strong>Аналитика результата</strong><span>Темы обращений и качество работы</span></div></div>
          <p className="design-flow__caption">Единая логика работы. В вашем контуре.</p>
        </GlassSurface>
      </div>
    </section>
    <section className="design-metrics container" aria-label="Ключевые показатели">
      {metrics.map(m => <div key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}
    </section>
  </>;
}

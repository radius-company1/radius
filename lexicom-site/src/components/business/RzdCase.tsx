import { rzdCase as item } from '../../data/rzdCase';
import { productHref } from '../../data/products';
import { GlassSurface } from '../ui/GlassSurface';
import { MobileDetails } from '../ui/MobileDetails';
import { MotionLink as Link } from '../ui/MotionLink';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import '../../styles/rzd-case.css';

export function RzdCase() {
  return (
    <section className="section rzd-case" id={item.id} aria-labelledby={item.titleId}>
      <div className="container">
        <Reveal>
          <SectionHeader eyebrow={item.customer} title={item.title} titleId={item.titleId} description={item.lead} />
        </Reveal>
        <Reveal>
          <GlassSurface className="rzd-case__overview" radius="xl" tint="blue" tier="matte">
            <div className="rzd-case__comparison">
              <div><h3>Задача</h3><p>{item.challenge}</p></div>
              <div><h3>Что изменилось</h3><p>{item.result}</p></div>
            </div>
            <dl className="rzd-case__facts">
              {item.facts.map(fact => <div key={fact.value}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
            </dl>
          </GlassSurface>
        </Reveal>
        <div className="rzd-case__work">
          {item.work.map((work, index) => (
            <Reveal key={work.title} delay={index * 40}>
              <article className="rzd-case__work-item">
                <MobileDetails title={<h3>{work.title}</h3>}>
                  <p>{work.text}</p><p>{work.detail}</p>
                </MobileDetails>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <article className="rzd-case__ticket" id={item.ticket.id} aria-labelledby="rzd-ticket-title">
            <p className="rzd-case__eyebrow">Управление обращениями · тикет-система</p>
            <h3 id="rzd-ticket-title">{item.ticket.title}</h3>
            <p>{item.ticket.lead}</p>
            <ol className="rzd-case__steps">
              {item.ticket.steps.map(step => <li key={step.title}><h4>{step.title}</h4><p>{step.text}</p></li>)}
            </ol>
            <Link className="rzd-case__link" to={productHref('ticket-system')}>Как работает управление обращениями →</Link>
            <p className="rzd-case__sla">{item.ticket.sla}</p>
            <details className="rzd-case__details">
              <summary>Карточка обращения и обмен данными</summary>
              <p>{item.ticket.details}</p>
            </details>
          </article>
        </Reveal>
        <Reveal>
          <details className="rzd-case__details rzd-case__next">
            <summary>Следующие этапы развития проекта</summary>
            <ul>{item.next.map(step => <li key={step}>{step}</li>)}</ul>
            <p>{item.channels}</p>
          </details>
          <Link className="rzd-case__link" to={productHref('contact-center')}>Возможности контактного центра Lexicom →</Link>
        </Reveal>
      </div>
    </section>
  );
}

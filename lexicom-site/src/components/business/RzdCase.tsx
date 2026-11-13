import { rzdCase as item } from '../../data/rzdCase';
import { productHref } from '../../data/products';
import { GlassSurface } from '../ui/GlassSurface';
import { MobileDetails } from '../ui/MobileDetails';
import { MotionLink as Link } from '../ui/MotionLink';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import '../../styles/rzd-case.css';
import { Icon } from '../ui/Icon';

const workIcons = ['users', 'chart', 'phone', 'shield'] as const;

export function RzdCase() {
  return (
    <section className="section rzd-case" id={item.id} aria-labelledby={item.titleId}>
      <div className="container">
        <Reveal>
          <SectionHeader eyebrow={item.customer} title={item.title} titleId={item.titleId} description={item.lead} />
        </Reveal>
        <Reveal>
          <GlassSurface className="rzd-case__overview" radius="xl" tier="matte">
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
                <span className="rzd-case__work-icon" aria-hidden="true">
                  <Icon name={workIcons[index % workIcons.length]} size={22} />
                </span>
                <MobileDetails title={<h3>{work.title}</h3>}>
                  <p>{work.text}</p><p>{work.detail}</p>
                </MobileDetails>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <article className="rzd-case__ticket" id={item.ticket.id} aria-labelledby="rzd-ticket-title">
            <div className="rzd-case__ticket-head">
              <p className="rzd-case__eyebrow">Управление обращениями · тикет-система</p>
              <h3 id="rzd-ticket-title">{item.ticket.title}</h3>
              <p>{item.ticket.lead}</p>
            </div>
            <ol className="rzd-case__steps">
              {item.ticket.steps.map(step => <li key={step.title}><h4>{step.title}</h4><p>{step.text}</p></li>)}
            </ol>
            <div className="rzd-case__ticket-meta">
              <p className="rzd-case__sla">{item.ticket.sla}</p>
              <Link className="rzd-case__link" to={productHref('ticket-system')}>Как работает управление обращениями <Icon name="arrow-right" /></Link>
            </div>
            <details className="rzd-case__details">
              <summary>Карточка обращения и обмен данными<span className="rzd-case__chevron" aria-hidden="true"><Icon name="chevron-down" size={18} /></span></summary>
              <p>{item.ticket.details}</p>
            </details>
          </article>
        </Reveal>
        <Reveal>
          <details className="rzd-case__details rzd-case__next">
            <summary>Следующие этапы развития проекта<span className="rzd-case__chevron" aria-hidden="true"><Icon name="chevron-down" size={18} /></span></summary>
            <ul>{item.next.map(step => <li key={step}>{step}</li>)}</ul>
            <p>{item.channels}</p>
          </details>
          <Link className="rzd-case__link" to={productHref('contact-center')}>Возможности контактного центра Lexicom <Icon name="arrow-right" /></Link>
        </Reveal>
      </div>
    </section>
  );
}

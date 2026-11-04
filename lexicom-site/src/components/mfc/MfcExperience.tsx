import { kuzbassMfcCase as item, novosibirskMfcCase } from '../../data/mfcCases';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import '../../styles/mfc-case.css';

export function MfcExperience() {
  return (
    <section className="section mfc-experience" id={item.id} aria-labelledby="mfc-experience-title">
      <div className="container">
        <Reveal variant="fade">
          <SectionHeader title={item.title} titleId="mfc-experience-title" description="Поиск правовых оснований и подготовка консультаций в обычном диалоге." />
        </Reveal>
        <Reveal>
          <GlassSurface as="article" className="mfc-case-detail" radius="xl" tint="mfc" tier="matte">
            <div className="mfc-case-detail__award">
              <strong>{item.award.place}</strong>
              <div>
                <h3>«{item.award.category}»</h3>
                <p>{item.award.competition} {item.award.period}.</p>
                <p>Проект УМФЦ Кузбасса «{item.award.project}».</p>
                <a className="mfc-case__link" href={item.award.sourceUrl} target="_blank" rel="noopener noreferrer">О победе проекта <span aria-hidden="true">↗</span></a>
              </div>
            </div>
            <div className="mfc-case-detail__overview">
              <div>
                <h3>Задача: разобраться в сложной нормативной базе</h3>
                <p>{item.task}</p>
                <h3>Что делает помощник</h3>
                <p>{item.solution}</p>
              </div>
              <dl className="mfc-case-detail__facts">
                <div><dt>Документов в базе знаний</dt><dd>{item.documents}</dd></div>
                <div><dt>Начало внедрения по контракту</dt><dd>{item.startYear}</dd></div>
              </dl>
            </div>
            <div className="mfc-case-detail__workflow">
              <h3>От вопроса — к ответу на основе документов</h3>
              <p>RAG — это подготовка ответа с опорой на найденные материалы. В этом проекте источником служат нормативно-правовые документы МФЦ.</p>
              <ol>{item.steps.map(step => <li key={step.title}><h4>{step.title}</h4><p>{step.text}</p></li>)}</ol>
            </div>
            <ul className="mfc-case-detail__benefits">
              {item.benefits.map(benefit => <li key={benefit.title}><h4>{benefit.title}</h4><p>{benefit.text}</p></li>)}
            </ul>
            <details className="mfc-case-detail__engineering">
              <summary>Как настроили поиск и подготовку ответов</summary>
              <div>{item.adaptations.map(part => <div key={part.title}><h4>{part.title}</h4><p>{part.text}</p></div>)}</div>
            </details>
            <div className="mfc-case-detail__result"><h3>Что изменилось в работе сотрудника</h3><p>{item.result}</p></div>
          </GlassSurface>
        </Reveal>
        <Reveal>
          <article className="mfc-case-secondary">
            <div><p className="mfc-case__eyebrow">Ещё один сценарий для МФЦ</p><h3>{novosibirskMfcCase.title}</h3></div>
            <div><p>{novosibirskMfcCase.task}</p><p>{novosibirskMfcCase.solution}</p></div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

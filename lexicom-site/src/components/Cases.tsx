import { MobileDetails } from './ui/MobileDetails';
import { Reveal } from './ui/Reveal';
import { MfcCaseFeature } from './MfcCaseFeature';
import { MotionLink as Link } from './ui/MotionLink';
import { homeCases } from '../data/cases';
import { GlassSurface } from './ui/GlassSurface';
import { SectionHeader } from './ui/SectionHeader';
import '../styles/customer-cases.css';

export function Cases() {
  return <section className="section section-zone section-zone--cases customer-cases" id="cases" aria-labelledby="cases-title">
    <div className="container">
      <Reveal variant="fade"><SectionHeader title="Результаты внедрений" titleId="cases-title" description="Проекты Lexicom в МФЦ, службах 122, ЕДДС и социальной защите: что было нужно заказчику и что изменилось после запуска." /></Reveal>
      <MfcCaseFeature />
      <div className="customer-cases__grid customer-cases__grid--home">{homeCases.map((item, index) => <Reveal key={item.id} delay={index * 60}><GlassSurface as="article" key={item.id} className="customer-cases__card" radius="xl" depth="raised" tint="blue">
        <p className="customer-case__eyebrow">{item.direction}</p><h3>{item.title}</h3>
        <MobileDetails title="Задача и решение"><dl><div><dt>Задача</dt><dd>{item.task}</dd></div><div><dt>Что внедрили</dt><dd>{item.solution}</dd></div></dl></MobileDetails>
        <div className="customer-case__result"><strong>{item.value}</strong><span>{item.label}</span><p>{item.result}</p></div>
        <Link className="customer-case__link" to={item.to}>Подробнее о внедрении <span aria-hidden="true">→</span></Link>
      </GlassSurface></Reveal>)}</div>
    </div>
  </section>;
}

import { Link } from 'react-router-dom';
import { customerCases } from '../data/cases';
import { GlassSurface } from './ui/GlassSurface';
import { SectionHeader } from './ui/SectionHeader';
import '../styles/customer-cases.css';

export function Cases() {
  return <section className="section section-zone section-zone--cases customer-cases" id="cases" aria-labelledby="cases-title">
    <div className="container">
      <SectionHeader title="Решения Lexicom в промышленной эксплуатации" titleId="cases-title" description="Опыт автоматизации обращений в медицинской службе, ЕДДС и социальной защите." />
      <div className="customer-cases__grid">{customerCases.map(item => <GlassSurface as="article" key={item.id} className="customer-cases__card" radius="xl" depth="raised" tint="blue">
        <p className="customer-case__eyebrow">{item.direction}</p><h3>{item.title}</h3>
        <dl><div><dt>Задача</dt><dd>{item.task}</dd></div><div><dt>Что внедрили</dt><dd>{item.solution}</dd></div></dl>
        <div className="customer-case__result"><strong>{item.value}</strong><span>{item.label}</span><p>{item.result}</p></div>
        <Link className="customer-case__link" to={item.to}>Подробнее о внедрении <span aria-hidden="true">→</span></Link>
      </GlassSurface>)}</div>
    </div>
  </section>;
}

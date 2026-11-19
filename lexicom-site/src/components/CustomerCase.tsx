import { Reveal } from './ui/Reveal';
import { MotionLink as Link } from './ui/MotionLink';
import { customerCases, launchSpeedCase, s122CaseScenarios } from '../data/cases';
import { kuzbassMfcCase } from '../data/mfcCases';
import { GlassSurface } from './ui/GlassSurface';
import { SectionHeader } from './ui/SectionHeader';
import '../styles/customer-cases.css';
import { Icon } from './ui/Icon';

export function CustomerCase({ index }: { index: 0 | 1 | 2 }) {
  const item = customerCases[index];
  return <section className="section customer-case" id={item.id} aria-labelledby={`${item.id}-title`}>
    <div className="container">
      <Reveal variant="fade"><SectionHeader title={item.title} titleId={`${item.id}-title`} description={item.direction} /></Reveal>
      <Reveal><div className="customer-case__grid">
        <div className="customer-case__block"><h3>Задача</h3><p>{item.task}</p></div>
        <div className="customer-case__metric"><strong>{item.value}</strong><span>{item.label}</span></div>
        <div className="customer-case__block"><h3>Что внедрили</h3><p>{item.solution}</p></div>
        <div className="customer-case__block"><h3>Результат</h3><p>{item.result}</p></div>
        {index === 0 && <div className="customer-case__block customer-case__scenarios"><h3>11 сценариев ИИ-агента</h3><ol>{s122CaseScenarios.map(s => <li key={s}>{s}</li>)}</ol></div>}
      </div></Reveal>
      {index === 0 && <Reveal><GlassSurface as="article" id={launchSpeedCase.id} className="customer-case__tver" radius="xl" tint="yellow">
        <div><p className="customer-case__eyebrow">Скорость запуска · отдельный проект</p><h3>Служба 122, Тверь</h3><p>Нужно было быстро запустить цифровой канал взаимодействия жителей с медицинской службой.</p><p>Реализовали и развернули решение для автоматизации взаимодействия с гражданами. Команда подготовила сервис к запуску за одну неделю.</p></div>
        <div className="customer-case__result"><div className="customer-case__metric"><strong>1 неделя</strong><span>Сервис внедрён за неделю.</span></div><p>Срок полного проекта зависит от состава решения и интеграций.</p></div>
      </GlassSurface></Reveal>}
    </div>
  </section>;
}

export function CustomerCaseLinks() {
  return <div className="customer-case-links"><h3>Примеры внедрений</h3><ul><li><Link to={kuzbassMfcCase.href}>{kuzbassMfcCase.title}<span>Поиск ответов по {kuzbassMfcCase.documents} нормативным документам <Icon name="arrow-right" /></span></Link></li>{customerCases.map(item => <li key={item.id}><Link to={item.to}>{item.title}<span>{item.value} — {item.label} <Icon name="arrow-right" /></span></Link></li>)}</ul></div>;
}

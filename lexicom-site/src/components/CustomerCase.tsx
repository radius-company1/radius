import { Link } from 'react-router-dom';
import { customerCases, s122CaseScenarios } from '../data/cases';
import { GlassSurface } from './ui/GlassSurface';
import { SectionHeader } from './ui/SectionHeader';
import '../styles/customer-cases.css';

export function CustomerCase({ index }: { index: 0 | 1 | 2 }) {
  const item = customerCases[index];
  return <section className="section customer-case" id={item.id} aria-labelledby={`${item.id}-title`}>
    <div className="container">
      <SectionHeader title={item.title} titleId={`${item.id}-title`} description={item.direction} />
      <GlassSurface className="customer-case__panel" radius="xl" depth="raised" tint="blue" tier="matte">
        <div className="customer-case__body">
          <div><h3>Задача</h3><p>{item.task}</p><h3>Что внедрили</h3><p>{item.solution}</p></div>
          <div className="customer-case__result"><strong>{item.value}</strong><span>{item.label}</span><h3>Результат</h3><p>{item.result}</p></div>
        </div>
        {index === 0 && <div className="customer-case__scenarios"><h3>11 сценариев цифрового помощника</h3><ol>{s122CaseScenarios.map(s => <li key={s}>{s}</li>)}</ol></div>}
      </GlassSurface>
      {index === 0 && <GlassSurface as="article" className="customer-case__tver" radius="xl" tint="yellow">
        <div><p className="customer-case__eyebrow">Скорость запуска · отдельный проект</p><h3>Служба 122, Тверь</h3><p>Нужно было быстро запустить цифровой канал взаимодействия жителей с медицинской службой.</p><p>Реализовали и развернули решение для автоматизации взаимодействия с гражданами. Команда подготовила сервис к запуску за одну неделю.</p></div>
        <div className="customer-case__result"><strong>1 неделя</strong><span>Сервис внедрён за неделю.</span><p>Срок полного проекта зависит от состава решения и интеграций.</p></div>
      </GlassSurface>}
    </div>
  </section>;
}

export function CustomerCaseLinks() {
  return <div className="customer-case-links"><h3>Примеры внедрений</h3><ul>{customerCases.map(item => <li key={item.id}><Link to={item.to}>{item.title}<span>{item.value} — {item.label} →</span></Link></li>)}</ul></div>;
}

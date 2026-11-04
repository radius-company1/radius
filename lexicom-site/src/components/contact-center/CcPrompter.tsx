import { prompterStages } from '../../data/contactCenterPage';
import { kuzbassMfcCase } from '../../data/mfcCases';
import { MotionLink as Link } from '../ui/MotionLink';
import '../../styles/mfc-case.css';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function CcPrompter() {
  return (
    <section className="section section--dark cc-prompter" id="cc-prompter" aria-labelledby="cc-prompter-title">
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Оператор получает контекст и помощь во время разговора"
            titleId="cc-prompter-title"
            description="ИИ-суфлёр находит информацию в базе знаний, помогает сформировать ответ и подсказывает следующий шаг. Сотрудник продолжает консультацию с учётом уже собранных сведений."
            light
          />
        </Reveal>

        <ol className="cc-prompter__stages">
          {prompterStages.map((stage, index) => (
            <li key={stage.label} className={`cc-prompter__stage cc-prompter__stage--${index + 1}`}>
              <Reveal delay={index * 90}>
                <div className="cc-prompter__marker" aria-hidden="true">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{stage.label}</h3>
                <p>{stage.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal>
          <aside className="mfc-case-reference">
            <p>Помощь сотруднику на практике</p>
            <h3>{kuzbassMfcCase.title}</h3>
            <p>Отдельный пример работы с базой знаний: сотрудник задаёт вопрос, а ИИ-помощник находит правовые основания среди {kuzbassMfcCase.documents} нормативных документов и готовит ответ.</p>
            <Link className="mfc-case__link" to={kuzbassMfcCase.href}>Читать кейс Кузбасса <span aria-hidden="true">→</span></Link>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}

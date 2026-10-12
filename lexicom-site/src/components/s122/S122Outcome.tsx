import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const capabilities = [
  {
    title: 'Уточнение запроса',
    text: 'Понимает свободную речь, задаёт недостающие вопросы и собирает параметры выбранного сценария.',
  },
  {
    title: 'Работа с данными',
    text: 'Использует сведения из диалога и, при подключении системы, получает доступный статус или слот.',
  },
  {
    title: 'Исправление непонимания',
    text: 'Если формулировка неясна, переспрашивает и продолжает диалог, не сбрасывая уже собранный контекст.',
  },
  {
    title: 'Передача контекста',
    text: 'Сотрудник получает причину обращения, собранные данные и историю разговора и не начинает его заново.',
  },
] as const;

export function S122Outcome() {
  return (
    <section className="section s122-outcome s122-section--compact" id="s122-outcome" aria-labelledby="s122-outcome-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Что умеет решение на линии 122"
            titleId="s122-outcome-title"
            description="Собственные возможности диалога: уточнение, работа с данными, восстановление понимания и передача контекста сотруднику."
          />
        </Reveal>

        <div className="s122-outcome__capabilities">
          {capabilities.map((item) => (
            <Reveal key={item.title}>
              <article className="s122-outcome__side s122-outcome__side--high surface-plain">
                <p className="s122-outcome__side-label">{item.title}</p>
                <p>{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

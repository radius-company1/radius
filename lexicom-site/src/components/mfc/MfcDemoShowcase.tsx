import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { mfcDemoState } from '../../data/directions/mfc';

type MfcDemoShowcaseProps = {
  onRequestDemo: () => void;
};

const exampleTurns = [
  { role: 'Гражданин', text: 'Какие документы нужны, чтобы оформить пособие на ребёнка?' },
  {
    role: 'Лекса',
    text: 'Уточняет, о каком пособии идёт речь и кто обращается, затем отвечает по базе знаний МФЦ перечнем документов и следующим шагом.',
  },
  {
    role: 'Результат',
    text: 'Гражданин понимает, что подготовить и куда обратиться. Типовой вопрос не занимает первую линию. Если ситуация выходит за сценарий, сотрудник получает историю диалога и собранные сведения.',
  },
] as const;

export function MfcDemoShowcase({ onRequestDemo }: MfcDemoShowcaseProps) {
  return (
    <section className="section section--ink mfc-demo" id="mfc-demo" aria-labelledby="mfc-demo-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Пример сценария"
            titleId="mfc-demo-title"
            description="Один полный путь: вопрос своими словами, уточнение, ответ по базе знаний и понятный результат. Запись и статус подключаются отдельно — после интеграции."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="mfc-demo__diagram" radius="xl" depth="float" tint="mfc">
            <ol className="mfc-hero__scenario" aria-label="Пример консультации в МФЦ">
              {exampleTurns.map((step, index) => (
                <li key={step.role} className="mfc-hero__scenario-step">
                  <span className="mfc-hero__scenario-index" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div className="mfc-hero__scenario-body">
                    <span className="mfc-hero__scenario-role">{step.role}</span>
                    <span className="mfc-hero__scenario-text">{step.text}</span>
                  </div>
                </li>
              ))}
            </ol>
            <Button onClick={onRequestDemo}>{mfcDemoState.demoCtaLabel}</Button>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

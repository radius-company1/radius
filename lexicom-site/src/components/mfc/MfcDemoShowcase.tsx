import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

type MfcDemoShowcaseProps = {
  onRequestDemo: () => void;
};

const demoNodes = [
  'Обращение гражданина',
  'Нейробот',
  'База знаний',
  'Передача сотруднику',
  'История и контекст',
  'Робот-суфлёр',
  'Фиксация результата',
  'Речевая аналитика',
] as const;

export function MfcDemoShowcase({ onRequestDemo }: MfcDemoShowcaseProps) {
  return (
    <section className="section section--ink mfc-demo" id="mfc-demo" aria-labelledby="mfc-demo-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Посмотрите, как нейробот и контактный центр работают вместе"
            titleId="mfc-demo-title"
            description="Нейробот принимает и уточняет обращение, а контактный центр получает историю диалога и собранный контекст для продолжения работы сотрудником."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="mfc-demo__diagram" radius="xl" depth="float" tint="mfc">
            <div className="mfc-demo__track" aria-hidden="true">
              {demoNodes.map((node, index) => (
                <div key={node} className="mfc-demo__track-item">
                  <span className="mfc-demo__node">{node}</span>
                  {index < demoNodes.length - 1 ? <span className="mfc-demo__arrow">→</span> : null}
                </div>
              ))}
            </div>
            <p className="mfc-demo__disclaimer">
              Демонстрация не подключена к реальным государственным системам, не проверяет настоящий статус заявления и
              не создаёт реальную запись.
            </p>
            <Button onClick={onRequestDemo}>Обсудить проект</Button>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

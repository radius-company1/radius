import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { mfcDemoState } from '../../data/directions/mfc';

type MfcDemoShowcaseProps = {
  onRequestDemo: () => void;
};

const demoNodes = [
  'Обращение гражданина',
  'Нейробот',
  'База знаний',
  'Передача сотруднику',
  'Суфлёр',
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
            description="Нейробот принимает и уточняет обращение, контактный центр получает историю и контекст, суфлёр помогает сотруднику продолжить диалог."
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
              Профильная демонстрация для МФЦ запрашивается отдельно. Она не подключена к государственным системам, не
              проверяет настоящий статус заявления и не создаёт реальную запись.
            </p>
            <Button onClick={onRequestDemo}>{mfcDemoState.demoCtaLabel}</Button>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

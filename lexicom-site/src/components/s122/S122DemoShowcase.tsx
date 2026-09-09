import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { s122DemoState } from '../../data/directions/s122';

type S122DemoShowcaseProps = {
  onRequestDemo: () => void;
};

const demoNodes = [
  'Обращение жителя',
  'Нейробот',
  'База знаний',
  'Маршрут в службу',
  'Оператор и суфлёр',
  'Фиксация результата',
  'Речевая аналитика',
] as const;

export function S122DemoShowcase({ onRequestDemo }: S122DemoShowcaseProps) {
  return (
    <section className="section section--ink s122-demo" id="s122-demo" aria-labelledby="s122-demo-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Демонстрация Lexicom на сценарии вашей службы 122"
            titleId="s122-demo-title"
            description="Нейробот принимает и уточняет обращение, выбирает маршрут или передаёт оператору контекст; суфлёр помогает продолжить диалог."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="s122-demo__diagram" radius="xl" depth="float" tint="s122">
            <div className="s122-demo__track" aria-hidden="true">
              {demoNodes.map((node, index) => (
                <div key={node} className="s122-demo__track-item">
                  <span className="s122-demo__node">{node}</span>
                  {index < demoNodes.length - 1 ? <span className="s122-demo__arrow">→</span> : null}
                </div>
              ))}
            </div>
            <p className="s122-demo__disclaimer">
              Профильная демонстрация для службы 122 запрашивается отдельно. Она не подключена к государственным
              системам и не выполняет реальные действия в информационных системах региона.
            </p>
            <Button onClick={onRequestDemo}>{s122DemoState.demoCtaLabel}</Button>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

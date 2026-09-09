import { Button } from '../ui/Button';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { eddsDemoState } from '../../data/directions/edds';

type EddsDemoProps = {
  onRequestDemo: () => void;
};

export function EddsDemo({ onRequestDemo }: EddsDemoProps) {
  return (
    <section className="section edds-demo edds-section--compact" id="edds-demo" aria-labelledby="edds-demo-title">
      <div className="container">
        <Reveal>
          <GlassSurface className="edds-demo__panel" radius="xl" depth="raised" tint="edds">
            <SectionHeader
              title="Посмотрите, как Лекса работает со сценарием ЕДДС"
              titleId="edds-demo-title"
              description="Покажем типовой разговор об отключении, сбор сведений и передачу контекста диспетчеру."
            />
            <div className="edds-demo__actions">
              <Button onClick={onRequestDemo}>{eddsDemoState.demoCtaLabel}</Button>
              <p className="edds-demo__note">Демонстрация по запросу — без имитации экстренного вызова.</p>
            </div>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

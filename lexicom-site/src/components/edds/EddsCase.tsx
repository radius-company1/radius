import { eddsCasePlaceholder } from '../../data/directions/edds';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function EddsCase() {
  const { fields, note, title } = eddsCasePlaceholder;

  return (
    <section className="section edds-case edds-section--compact" id="edds-case" aria-labelledby="edds-case-title">
      <div className="container">
        <Reveal>
          <SectionHeader title={title} titleId="edds-case-title" />
        </Reveal>
        <Reveal>
          <GlassSurface className="edds-case__panel" radius="xl" depth="raised" tint="edds">
            <div className="edds-case__grid">
              <div>
                <p className="edds-case__label">Задача заказчика</p>
                <p className="edds-case__value">{fields.task}</p>
              </div>
              <div>
                <p className="edds-case__label">Состав решения</p>
                <p className="edds-case__value">{fields.solution}</p>
              </div>
              <div>
                <p className="edds-case__label">Интеграции</p>
                <p className="edds-case__value">{fields.integrations}</p>
              </div>
              <div>
                <p className="edds-case__label">Результаты</p>
                <p className="edds-case__value">{fields.result}</p>
              </div>
            </div>
            <p className="edds-case__note">{note}</p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

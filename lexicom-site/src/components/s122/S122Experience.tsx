import { s122CasePlaceholder } from '../../data/directions/s122';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Experience() {
  const { fields, note, requiresFillBeforePublish } = s122CasePlaceholder;

  return (
    <section className="section s122-experience" id="s122-experience" aria-labelledby="s122-experience-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Lexicom используется в регионах присутствия платформы"
            titleId="s122-experience-title"
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="s122-experience__case" radius="xl" depth="raised" tint="s122">
            {requiresFillBeforePublish ? (
              <p className="s122-experience__draft-badge">Шаблон для внутреннего обсуждения · перед публикацией заполнить</p>
            ) : null}
            <div className="s122-experience__case-grid">
              <div>
                <p className="s122-experience__label">Задача</p>
                <p className="s122-experience__placeholder">{fields.task}</p>
              </div>
              <div>
                <p className="s122-experience__label">Регион или сеть</p>
                <p className="s122-experience__placeholder">{fields.region}</p>
              </div>
              <div>
                <p className="s122-experience__label">Состав решения</p>
                <p className="s122-experience__placeholder">{fields.solution}</p>
              </div>
              <div>
                <p className="s122-experience__label">Масштаб</p>
                <p className="s122-experience__placeholder">{fields.scale}</p>
              </div>
              <div className="s122-experience__case-wide">
                <p className="s122-experience__label">Результат</p>
                <p className="s122-experience__placeholder">{fields.result}</p>
              </div>
            </div>
            <p className="s122-experience__note">{note}</p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

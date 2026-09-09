import { mfcCasePlaceholder } from '../../data/directions/mfc';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcExperience() {
  const { fields, note, requiresFillBeforePublish } = mfcCasePlaceholder;

  return (
    <section className="section mfc-experience" id="mfc-experience" aria-labelledby="mfc-experience-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Lexicom используется в МФЦ в регионах присутствия платформы"
            titleId="mfc-experience-title"
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="mfc-experience__case" radius="xl" depth="raised" tint="mfc">
            {requiresFillBeforePublish ? (
              <p className="mfc-experience__draft-badge">Шаблон для внутреннего обсуждения · перед публикацией заполнить</p>
            ) : null}
            <div className="mfc-experience__case-grid">
              <div>
                <p className="mfc-experience__label">Задача</p>
                <p className="mfc-experience__placeholder">{fields.task}</p>
              </div>
              <div>
                <p className="mfc-experience__label">Регион или сеть</p>
                <p className="mfc-experience__placeholder">{fields.region}</p>
              </div>
              <div>
                <p className="mfc-experience__label">Состав решения</p>
                <p className="mfc-experience__placeholder">{fields.solution}</p>
              </div>
              <div>
                <p className="mfc-experience__label">Масштаб</p>
                <p className="mfc-experience__placeholder">{fields.scale}</p>
              </div>
              <div className="mfc-experience__case-wide">
                <p className="mfc-experience__label">Результат</p>
                <p className="mfc-experience__placeholder">{fields.result}</p>
              </div>
            </div>
            <p className="mfc-experience__note">{note}</p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

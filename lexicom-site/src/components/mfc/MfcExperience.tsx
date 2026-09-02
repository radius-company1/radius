import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcExperience() {
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
            <div className="mfc-experience__case-grid">
              <div>
                <p className="mfc-experience__label">Задача</p>
                <p className="mfc-experience__placeholder">—</p>
              </div>
              <div>
                <p className="mfc-experience__label">Регион или сеть</p>
                <p className="mfc-experience__placeholder">—</p>
              </div>
              <div>
                <p className="mfc-experience__label">Состав решения</p>
                <p className="mfc-experience__placeholder">—</p>
              </div>
              <div>
                <p className="mfc-experience__label">Масштаб</p>
                <p className="mfc-experience__placeholder">—</p>
              </div>
              <div className="mfc-experience__case-wide">
                <p className="mfc-experience__label">Результат</p>
                <p className="mfc-experience__placeholder">—</p>
              </div>
            </div>
            <p className="mfc-experience__note">
              Профильный кейс будет добавлен после согласования заказчика, состава внедрения, масштаба и публичных
              результатов.
            </p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

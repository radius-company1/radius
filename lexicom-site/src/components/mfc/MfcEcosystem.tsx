import { mfcEcosystemLevels } from '../../data/directions/mfc';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcEcosystem() {
  return (
    <section className="section mfc-ecosystem" id="mfc-ecosystem" aria-labelledby="mfc-ecosystem-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="От отдельного бота до единого контура обслуживания"
            titleId="mfc-ecosystem-title"
            description="Можно начать с одного канала или сценария — например записи через MAX — а затем подключить телефонию, сайт, контактный центр, помощь сотрудникам, интеграции и аналитику."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="mfc-ecosystem__stack" radius="xl" depth="float" tint="mfc">
            <p className="mfc-ecosystem__tagline">
              Lexicom может поставить один бот в MAX, а может собрать весь коммуникационный контур МФЦ.
            </p>
            <div className="mfc-ecosystem__levels">
              {mfcEcosystemLevels.map((level) => (
                <div key={level.level} className="mfc-ecosystem__level">
                  <div className="mfc-ecosystem__level-head">
                    <span className="mfc-ecosystem__level-num">{level.level}</span>
                    <h3>{level.title}</h3>
                  </div>
                  <ul className="mfc-ecosystem__items">
                    {level.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

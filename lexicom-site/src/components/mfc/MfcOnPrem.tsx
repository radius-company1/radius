import { mfcOnPremAccents } from '../../data/directions/mfc';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcOnPrem() {
  return (
    <section className="section section--ink mfc-onprem" id="mfc-onprem" aria-labelledby="mfc-onprem-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Платформа работает внутри инфраструктуры заказчика"
            titleId="mfc-onprem-title"
            description="Размещаем Lexicom в контуре организации и работаем напрямую с разработчиком собственного ПО. Внешний канал связи и размещение платформы — разные вещи."
          />
        </Reveal>

        <div className="mfc-onprem__accents">
          {mfcOnPremAccents.map((accent, index) => (
            <Reveal key={accent.title} delay={index * 60}>
              <GlassSurface className="mfc-onprem__accent" radius="lg" depth="raised" tint={index === 1 ? 'yellow' : 'mfc'}>
                <h3>{accent.title}</h3>
                <p>{accent.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

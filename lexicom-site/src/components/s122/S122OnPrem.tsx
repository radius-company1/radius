import { s122OnPremAccents } from '../../data/directions/s122';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122OnPrem() {
  return (
    <section className="section section--ink s122-onprem" id="s122-onprem" aria-labelledby="s122-onprem-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Платформа работает внутри инфраструктуры заказчика"
            titleId="s122-onprem-title"
            description="Мы разрабатываем Lexicom и разворачиваем платформу в инфраструктуре региона. Вы работаете напрямую с производителем программного обеспечения."
          />
        </Reveal>

        <div className="s122-onprem__accents">
          {s122OnPremAccents.map((accent, index) => (
            <Reveal key={accent.title} delay={index * 60}>
              <GlassSurface
                className="s122-onprem__accent"
                radius="lg"
                depth="raised"
                tint={index === 1 ? 'yellow' : 's122'}
              >
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

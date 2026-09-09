import { s122OnPremPoints, s122PlatformModules } from '../../data/directions/s122';
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
            title="Разворачивается внутри инфраструктуры заказчика"
            titleId="s122-onprem-title"
            description="Платформа может работать в закрытом или изолированном контуре. Данные, записи обращений, модели, журналы и интеграционный слой остаются внутри выбранной инфраструктуры заказчика."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="s122-onprem__shell" radius="xl" depth="float" tint="s122">
            <p className="s122-onprem__shell-label">Инфраструктура заказчика</p>
            <ul className="s122-platform__modules">
              {s122PlatformModules.map((module) => (
                <li key={module.id} className="s122-platform__module">
                  <strong>{module.title}</strong>
                  <span>{module.text}</span>
                </li>
              ))}
            </ul>
          </GlassSurface>
        </Reveal>

        <div className="s122-onprem__grid">
          {s122OnPremPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 40}>
              <GlassSurface className="s122-onprem__card" radius="lg" depth="raised" tint={index % 2 === 0 ? 's122' : 'yellow'}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

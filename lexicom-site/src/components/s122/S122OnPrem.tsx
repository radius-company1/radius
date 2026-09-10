import { profileResourceNote } from '../../data/flexibility';
import { s122OnPremMarkers, s122PlatformModules } from '../../data/directions/s122';
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
            description="Данные, записи обращений, модели, журналы и интеграционный слой остаются внутри выбранной инфраструктуры."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="s122-onprem__shell" radius="xl" depth="float" tint="s122">
            <p className="s122-onprem__shell-label">Периметр инфраструктуры заказчика</p>
            <ul className="s122-platform__modules s122-platform__modules--compact">
              {s122PlatformModules.map((module) => (
                <li key={module.id} className="s122-platform__module">
                  <strong>{module.title}</strong>
                  <span>{module.text}</span>
                </li>
              ))}
            </ul>
            <ul className="s122-onprem__markers">
              {s122OnPremMarkers.map((marker) => (
                <li key={marker}>{marker}</li>
              ))}
            </ul>
            <p className="s122-onprem__stack">Российский технологический стек</p>
            <p className="profile-resource-note">{profileResourceNote}</p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

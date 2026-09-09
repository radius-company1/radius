import { s122PlatformModules } from '../../data/directions/s122';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Platform() {
  return (
    <section className="section s122-platform" id="s122-platform" aria-labelledby="s122-platform-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Единый промышленный контур, а не набор отдельных роботов"
            titleId="s122-platform-title"
            description="ASR, диалог, знания, интеграции, РМО и аналитика работают как одна платформа Lexicom."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="s122-platform__shell" radius="xl" depth="float" tint="s122">
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
      </div>
    </section>
  );
}

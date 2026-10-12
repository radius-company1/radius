import { implementationDiscuss, implementationLaunch, implementationSteps } from '../data/implementation';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export function Implementation() {
  return (
    <section
      className="section section-zone section-zone--implementation implementation"
      id="implementation"
      aria-labelledby="implementation-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Опыт и начало работы"
            titleId="implementation-title"
            description="Сначала запускаем один процесс, проверяем сценарий и затем расширяем состав. Не обещаем готовое техническое задание после первого разговора."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="implementation-launch" radius="xl" depth="float" tint="yellow">
            <p className="implementation-launch__title">{implementationLaunch.title}</p>
            <p className="implementation-launch__text">{implementationLaunch.text}</p>
          </GlassSurface>
        </Reveal>

        <ol className="implementation-route">
          {implementationSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 50}>
              <li className="implementation-route__step">
                <span className="implementation-route__node" aria-hidden="true">
                  {step.step}
                </span>
                <GlassSurface className="implementation-route__card" radius="lg" depth="raised">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </GlassSurface>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <p className="implementation__closing">{implementationDiscuss}</p>
        </Reveal>
      </div>
    </section>
  );
}

import { contactCenterFaq, implementationSteps } from '../../data/contactCenterPage';
import { Accordion } from '../ui/Accordion';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function CcLaunch() {
  return (
    <section className="section cc-launch" id="cc-launch" aria-labelledby="cc-launch-title">
      <div className="container">
        <Reveal>
          <SectionHeader title="Как проходит внедрение" titleId="cc-launch-title" />
        </Reveal>

        <Reveal>
          <ol className="cc-launch__route">
            {implementationSteps.map((step, index) => (
              <li key={step}>
                <span aria-hidden="true">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal>
          <GlassSurface className="cc-launch__timing" radius="xl" depth="raised" tint="yellow" tier="matte">
            <p className="cc-launch__timing-lead">Развёртывание продуктов — от 3 дней.</p>
            <p>
              Срок полного внедрения контактного центра зависит от состава решения, интеграций и готовности
              инфраструктуры.
            </p>
          </GlassSurface>
        </Reveal>

        <div className="cc-launch__faq">
          <Reveal>
            <h3 className="cc-launch__faq-title" id="cc-faq-title">
              Частые вопросы
            </h3>
          </Reveal>
          <Reveal>
            <div className="surface-calm cc-launch__faq-panel">
              <Accordion items={contactCenterFaq} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

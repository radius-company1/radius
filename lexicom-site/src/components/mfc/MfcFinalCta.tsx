import { Button } from '../ui/Button';
import { ContactForm } from '../ContactForm';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { mfcDemoState } from '../../data/directions/mfc';

type MfcFinalCtaProps = {
  onRequestDemo: () => void;
};

export function MfcFinalCta({ onRequestDemo }: MfcFinalCtaProps) {
  return (
    <section className="section mfc-final" id="contact" aria-labelledby="mfc-final-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Начнём с одного процесса вашего МФЦ"
            titleId="mfc-final-title"
            description="Разберём поток обращений, выберем первый сценарий, покажем профильную демонстрацию и определим состав решения с учётом вашей инфраструктуры."
          />
        </Reveal>

        <Reveal>
          <div className="mfc-final__actions">
            <Button onClick={onRequestDemo}>{mfcDemoState.demoCtaLabel}</Button>
            <Button variant="secondary" href={`#${mfcDemoState.formAnchor}`}>
              Обсудить проект
            </Button>
          </div>
        </Reveal>

        <Reveal>
          <GlassSurface className="mfc-final__form-wrap" radius="xl" depth="raised" tint="mfc">
            <ContactForm
              id={mfcDemoState.formAnchor}
              organizationLabel="Организация и регион"
              messageRequired={false}
              submitLabel="Отправить заявку"
            />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

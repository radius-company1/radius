import { Button } from '../ui/Button';
import { ContactForm } from '../ContactForm';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';
import { s122DemoState } from '../../data/directions/s122';

type S122FinalCtaProps = {
  onRequestDemo: () => void;
};

export function S122FinalCta({ onRequestDemo }: S122FinalCtaProps) {
  return (
    <section className="section s122-final" id="contact" aria-labelledby="s122-final-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Начнём с одного процесса вашей службы 122"
            titleId="s122-final-title"
            description="Разберём поток обращений, выберем первый сценарий, покажем профильную демонстрацию и определим состав решения с учётом вашей инфраструктуры."
          />
        </Reveal>

        <Reveal>
          <div className="s122-final__actions">
            <Button onClick={onRequestDemo}>{s122DemoState.demoCtaLabel}</Button>
            <Button variant="secondary" href={`#${s122DemoState.formAnchor}`}>
              Обсудить проект
            </Button>
          </div>
        </Reveal>

        <Reveal>
          <GlassSurface className="s122-final__form-wrap" radius="xl" depth="raised" tint="s122">
            <ContactForm
              id={s122DemoState.formAnchor}
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

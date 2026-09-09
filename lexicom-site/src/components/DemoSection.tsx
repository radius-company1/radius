import { Button } from './ui/Button';
import { ContactForm } from './ContactForm';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

type DemoSectionProps = {
  onOpenChat: () => void;
};

export function DemoSection({ onOpenChat }: DemoSectionProps) {
  return (
    <section className="section section-zone section-zone--demo demo" id="contact" aria-labelledby="demo-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Задайте вопрос ИИ-консультанту"
            titleId="demo-title"
            description="Кратко расскажет о платформе, внедрении и выборе направления."
          />
        </Reveal>

        <Reveal>
          <div className="demo__chat-cta">
            <Button onClick={onOpenChat}>Открыть чат</Button>
          </div>
        </Reveal>

        <Reveal>
          <p className="demo__profiles-line">
            Выберите направление, чтобы изучить сценарии и запросить профильную демонстрацию.{' '}
            <a className="demo__profiles-link" href="#directions">
              Выбрать направление
            </a>
          </p>
        </Reveal>

        <Reveal>
          <SectionHeader
            title="Обсудим, какие процессы можно автоматизировать в вашей организации"
            titleId="demo-discuss-title"
            description="Изучим текущую работу с обращениями, предложим конфигурацию платформы и определим, с какого сценария лучше начать."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="demo__form-wrap" radius="xl" depth="raised" tint="cyan">
            <ContactForm />
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

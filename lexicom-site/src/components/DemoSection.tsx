import { type RefObject } from 'react';
import { Button } from './ui/Button';
import { ContactForm } from './ContactForm';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

type DemoSectionProps = {
  onOpenChat: () => void;
  openChatRef?: RefObject<HTMLButtonElement | null>;
};

export function DemoSection({ onOpenChat, openChatRef }: DemoSectionProps) {
  return (
    <section className="section section-zone section-zone--demo demo" id="contact" aria-labelledby="demo-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Обсудить проект"
            titleId="demo-title"
            description="Разберём вашу задачу и определим, какие продукты, интеграции и ресурсы нужны для первого этапа."
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="demo__form-wrap" radius="xl" depth="raised" tint="cyan">
            <ContactForm />
          </GlassSurface>
        </Reveal>

        <Reveal>
          <div className="demo__overview">
            <p>
              Сценарный обзор платформы отвечает по ключевым словам о продуктах и начале работы. Это не живой ИИ.
            </p>
            <Button ref={openChatRef} variant="secondary" onClick={onOpenChat}>
              Открыть сценарный обзор
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

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

        <div className="final-contact-methods">
          <div><a href="mailto:info@lexicom.ai">info@lexicom.ai <span aria-hidden="true">↗</span></a><a href="tel:+74999578132">+7 (499) 957-81-32 <span aria-hidden="true">↗</span></a></div>
          <p>Отправка через форму пока не подключена. Связаться можно по email или телефону.</p>
        </div>

        <Reveal>
          <GlassSurface className="demo__form-wrap" radius="xl" depth="raised" tint="cyan">
            <ContactForm />
          </GlassSurface>
        </Reveal>

        <Reveal>
          <div className="demo__overview">
            <p>
              Сценарный обзор платформы отвечает по ключевым словам о продуктах и начале работы.
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

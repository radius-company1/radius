import { Button } from './ui/Button';
import { ContactForm } from './ContactForm';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

type DemoSectionProps = {
  onOpenChat: () => void;
  onDiscussClick: () => void;
};

export function DemoSection({ onOpenChat, onDiscussClick }: DemoSectionProps) {
  return (
    <section className="section section-zone section-zone--demo demo" id="contact" aria-labelledby="demo-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Задайте вопрос ИИ-консультанту"
            titleId="demo-title"
            description="Чат-бот расскажет о возможностях платформы, ответит на вопросы о внедрении и поможет выбрать подходящее направление. Демонстрация показывает, как ИИ работает с базой знаний, понимает контекст диалога и формирует ответ."
          />
        </Reveal>

        <Reveal>
          <div className="demo__chat-cta">
            <Button onClick={onOpenChat}>Открыть чат</Button>
          </div>
        </Reveal>

        <Reveal>
          <GlassSurface className="demo__profiles" radius="xl" depth="raised" tint="cyan">
            <h3 className="demo__profiles-title">Профильные демонстрации</h3>
            <p>
              На страницах МФЦ, службы 122 и ЕДДС можно будет посмотреть, как нейробот и контактный центр Lexicom
              работают с задачами конкретного направления.
            </p>
            <Button href="#directions" variant="secondary">
              Выбрать своё направление
            </Button>
          </GlassSurface>
        </Reveal>

        <Reveal>
          <div className="demo__final-wrap">
            <div className="demo__final-glow" aria-hidden="true" />
            <GlassSurface className="demo__final-cta" variant="dark" radius="xl" depth="float" tint="yellow">
              <h3>Обсудим, какие процессы можно автоматизировать в вашей организации</h3>
              <p>
                Изучим текущую работу с обращениями, предложим конфигурацию платформы и определим, с какого сценария
                лучше начать.
              </p>
              <div className="demo__final-actions">
                <span className="demo__btn-glow">
                  <Button onClick={onDiscussClick}>Обсудить проект</Button>
                </span>
                <Button variant="ghost-light" onClick={onOpenChat}>
                  Поговорить с Лексой
                </Button>
              </div>
            </GlassSurface>
          </div>
        </Reveal>

        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

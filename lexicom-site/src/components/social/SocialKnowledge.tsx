import { socialKnowledgeItems, socialKnowledgeNote } from '../../data/directions/social';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function SocialKnowledge() {
  return (
    <section className="section social-knowledge" id="social-knowledge" aria-labelledby="social-knowledge-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Согласованные ответы во всех каналах"
            titleId="social-knowledge-title"
            description="Нейробот и специалисты используют общую базу знаний с учётом региональных мер поддержки и порядка работы вашей организации."
          />
        </Reveal>

        <div className="social-knowledge__layout">
          <Reveal>
            <GlassSurface className="social-knowledge__panel" radius="xl" depth="raised" tint="social">
              <ul className="social-knowledge__list">
                {socialKnowledgeItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="social-knowledge__note">{socialKnowledgeNote}</p>
            </GlassSurface>
          </Reveal>

          <Reveal delay={80}>
            <div className="social-knowledge__links" aria-hidden="true">
              <div className="social-knowledge__node social-knowledge__node--core">База знаний</div>
              <div className="social-knowledge__connectors">
                <span />
                <span />
              </div>
              <div className="social-knowledge__pair">
                <div className="social-knowledge__node">Нейробот</div>
                <div className="social-knowledge__node">ИИ-суфлёр</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

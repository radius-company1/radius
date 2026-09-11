import { socialSpecialistNote, socialSpecialistPoints } from '../../data/directions/social';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function SocialSpecialist() {
  return (
    <section
      className="section section--dark social-specialist social-section--tech"
      id="social-specialist"
      aria-labelledby="social-specialist-title"
    >
      <div className="section--dark__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Специалист подключается с пониманием ситуации"
            titleId="social-specialist-title"
            description="Контактный центр помогает продолжить консультацию, используя историю диалога и уже собранные сведения."
            light
          />
        </Reveal>

        <Reveal>
          <GlassSurface className="social-specialist__workspace" radius="xl" depth="raised" tint="cyan" variant="dark">
            <div className="social-specialist__cols">
              <aside className="social-specialist__history">
                <p className="social-specialist__col-label">История</p>
                <ul>
                  <li>Канал: виджет сайта</li>
                  <li>Тема: помощь на дому</li>
                  <li>Регион: уточнён</li>
                </ul>
              </aside>
              <div className="social-specialist__dialog">
                <p className="social-specialist__col-label">Диалог</p>
                <p>Житель описал ситуацию. Ассистент уточнил вопрос и подготовил контекст для специалиста.</p>
              </div>
              <aside className="social-specialist__hint">
                <p className="social-specialist__col-label">Подсказка суфлёра</p>
                <p>Порядок обращения за социальным обслуживанием на дому — фрагмент из базы знаний.</p>
              </aside>
            </div>
          </GlassSurface>
        </Reveal>

        <div className="social-specialist__points">
          {socialSpecialistPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 40}>
              <GlassSurface className="social-specialist__point" radius="lg" depth="raised" tint="social" variant="dark">
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </GlassSurface>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="social-specialist__closing">{socialSpecialistNote}</p>
        </Reveal>
      </div>
    </section>
  );
}

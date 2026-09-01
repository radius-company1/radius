import { aboutTheses } from '../data/about';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

const teamThesis = aboutTheses[3];
const cardTheses = aboutTheses.slice(0, 3);

export function About() {
  return (
    <section className="section section-zone section-zone--about about" id="about" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            eyebrow="О компании"
            title="Вы работаете напрямую с разработчиком платформы"
            titleId="about-title"
            description="Lexicom самостоятельно разрабатывает и развивает программную платформу для автоматизации коммуникаций. Мы не собираем решение из готовых продуктов разных поставщиков — в основе каждого внедрения находится собственное продуктовое ядро Lexicom."
          />
        </Reveal>

        <div className="about__layout">
          <Reveal>
            <GlassSurface className="about__stat" radius="xl" depth="float" tier="matte" tint="yellow">
              <p className="about__stat-value">60+</p>
              <h3 className="about__stat-title">{teamThesis.title}</h3>
              <p className="about__stat-text">{teamThesis.description}</p>
            </GlassSurface>
          </Reveal>
          <div className="about__cards">
            {cardTheses.map((thesis, index) => (
              <Reveal key={thesis.title} delay={index * 70}>
                <div className="surface-plain about-card">
                  <h3>{thesis.title}</h3>
                  <p>{thesis.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <p className="about__closing surface-plain">
            Заказчик получает не набор интегрированных сервисов, а собственную платформу Lexicom и прямую
            ответственность вендора за её внедрение и развитие.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

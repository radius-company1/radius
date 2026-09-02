import { casePlaceholders } from '../data/cases';
import { Button } from './ui/Button';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

function CaseDetails({ item }: { item: (typeof casePlaceholders)[number] }) {
  return (
    <dl className="case-card__details">
      <div>
        <dt>Задача</dt>
        <dd>{item.task}</dd>
      </div>
      <div>
        <dt>Внедрение</dt>
        <dd>{item.solution}</dd>
      </div>
      <div>
        <dt>Масштаб</dt>
        <dd>{item.scale}</dd>
      </div>
      <div>
        <dt>Результат</dt>
        <dd>{item.result}</dd>
      </div>
    </dl>
  );
}

export function Cases() {
  const [featured, ...compact] = casePlaceholders;

  return (
    <section className="section section-zone section-zone--cases cases" id="cases" aria-labelledby="cases-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Решения Lexicom в промышленной эксплуатации"
            titleId="cases-title"
            description="Платформа Lexicom используется для автоматизации массовых обращений, поддержки сотрудников и управления коммуникациями в государственных организациях."
          />
        </Reveal>

        <div className="cases__mosaic">
          <Reveal>
            <GlassSurface as="article" className="case-card case-card--featured" radius="xl" depth="float" tint="blue">
              <h3 className="case-card__title">{featured.title}</h3>
              <CaseDetails item={featured} />
            </GlassSurface>
          </Reveal>
          <div className="cases__compact">
            {compact.map((item, index) => (
              <Reveal key={item.id} delay={index * 80}>
                <GlassSurface as="article" className="case-card case-card--compact" radius="lg" depth="raised">
                  <h3 className="case-card__title">{item.title}</h3>
                  <CaseDetails item={item} />
                </GlassSurface>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="cases__action">
            <Button variant="secondary">Смотреть все кейсы</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { casePlaceholders, type CasePlaceholder } from '../data/cases';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

function FeaturedCase({ item }: { item: CasePlaceholder }) {
  return (
    <GlassSurface as="article" className="case-card case-card--featured" radius="xl" depth="float" tint="blue">
      {item.note ? <p className="case-card__note">{item.note}</p> : null}
      <h3 className="case-card__title">{item.title}</h3>
      <p className="case-card__customer">{item.customer}</p>
      <dl className="case-card__details">
        <div>
          <dt>Задача</dt>
          <dd>{item.task}</dd>
        </div>
        <div>
          <dt>Что внедрили</dt>
          <dd>{item.solution}</dd>
        </div>
      </dl>
      {item.metrics.length > 0 ? (
        <div className="case-card__metrics">
          <p className="case-card__metrics-label">Сравнение показателей</p>
          <table className="case-card__table">
            <thead>
              <tr>
                <th scope="col">Показатель</th>
                <th scope="col">До внедрения</th>
                <th scope="col">После внедрения</th>
              </tr>
            </thead>
            <tbody>
              {item.metrics.map((row, index) => (
                <tr key={`${row.metric}-${index}`}>
                  <td>{row.metric}</td>
                  <td>{row.before}</td>
                  <td>{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}
      <dl className="case-card__details">
        <div>
          <dt>Итог</dt>
          <dd>{item.result}</dd>
        </div>
      </dl>
    </GlassSurface>
  );
}

function CompactCase({ item }: { item: CasePlaceholder }) {
  return (
    <GlassSurface as="article" className="case-card case-card--compact" radius="lg" depth="raised">
      <h3 className="case-card__title">{item.title}</h3>
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
          <dt>Результат</dt>
          <dd>{item.result}</dd>
        </div>
      </dl>
    </GlassSurface>
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
            <FeaturedCase item={featured} />
          </Reveal>
          <div className="cases__compact">
            {compact.map((item, index) => (
              <Reveal key={item.id} delay={index * 80}>
                <CompactCase item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

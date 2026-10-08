import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

export type CaseMetric = {
  name: string;
  unit: string;
  before: string | null;
  after: string | null;
  period: string | null;
};

export type CaseStudyData = {
  id: string;
  titleId: string;
  title: string;
  status: string;
  subject: string | null;
  taskLabel: string;
  task: string | null;
  scopeLabel: string;
  scope: readonly string[];
  metrics: readonly CaseMetric[];
};

function CasePending() {
  return <p className="ekc-case__pending">Готовится к публикации</p>;
}

/** Compact case placeholder. Empty values stay as a publication note, never as zeros. */
export function CaseStudy({ data }: { data: CaseStudyData }) {
  const { id, titleId, title, status, subject, taskLabel, task, scopeLabel, scope, metrics } = data;

  return (
    <section className="section ekc-case" id={id} aria-labelledby={titleId}>
      <div className="container">
        <Reveal>
          <SectionHeader title={title} titleId={titleId} description={status} />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="ekc-case__panel" radius="xl" depth="raised" tint="blue" tier="matte">
            {subject ? <p className="ekc-case__region">{subject}</p> : null}

            <div className="ekc-case__parts">
              <article className="ekc-case__part">
                <h3>{taskLabel}</h3>
                {task ? <p>{task}</p> : <CasePending />}
              </article>

              <article className="ekc-case__part">
                <h3>{scopeLabel}</h3>
                {scope.length ? (
                  <ul className="ekc-case__scope">
                    {scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <CasePending />
                )}
              </article>
            </div>

            <article className="ekc-case__part ekc-case__results">
              <h3>Результаты: до и после</h3>
              {metrics.length ? (
                <table className="ekc-case__table">
                  <thead>
                    <tr>
                      <th scope="col">Показатель</th>
                      <th scope="col">До</th>
                      <th scope="col">После</th>
                      <th scope="col">Период сравнения</th>
                    </tr>
                  </thead>
                  <tbody>
                    {metrics.map((metric) => (
                      <tr key={metric.name}>
                        <th scope="row">
                          {metric.name}
                          {metric.unit ? <span className="ekc-case__unit">, {metric.unit}</span> : null}
                        </th>
                        <td data-label="До">{metric.before ?? <CasePending />}</td>
                        <td data-label="После">{metric.after ?? <CasePending />}</td>
                        <td data-label="Период сравнения">{metric.period ?? <CasePending />}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <CasePending />
              )}
            </article>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

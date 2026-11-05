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

/** Render only supplied case facts; empty cases and unfinished metrics stay out of the page. */
export function CaseStudy({ data }: { data: CaseStudyData }) {
  const { id, titleId, title, status, subject, taskLabel, task, scopeLabel, scope, metrics } = data;
  const completeMetrics = metrics.filter(metric => metric.before && metric.after && metric.period);
  if (!task && !scope.length && !completeMetrics.length) return null;

  return (
    <section className="section ekc-case" id={id} aria-labelledby={titleId}>
      <div className="container">
        <Reveal>
          <SectionHeader title={title} titleId={titleId} description={status} />
        </Reveal>

        <Reveal delay={60}>
          <GlassSurface className="ekc-case__panel" radius="xl" depth="raised" tint="blue" tier="matte">
            {subject ? <p className="ekc-case__region">{subject}</p> : null}

            {task || scope.length ? <div className="ekc-case__parts">
              {task ? <article className="ekc-case__part">
                <h3>{taskLabel}</h3>
                <p>{task}</p>
              </article> : null}

              {scope.length ? <article className="ekc-case__part">
                <h3>{scopeLabel}</h3>
                  <ul className="ekc-case__scope">
                    {scope.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
              </article> : null}
            </div> : null}

            {completeMetrics.length ? <article className="ekc-case__part ekc-case__results">
              <h3>Результаты: до и после</h3>
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
                    {completeMetrics.map((metric) => (
                      <tr key={metric.name}>
                        <th scope="row">
                          {metric.name}
                          {metric.unit ? <span className="ekc-case__unit">, {metric.unit}</span> : null}
                        </th>
                        <td data-label="До">{metric.before}</td>
                        <td data-label="После">{metric.after}</td>
                        <td data-label="Период сравнения">{metric.period}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </article> : null}
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

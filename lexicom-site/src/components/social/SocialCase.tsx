import { socialCasePlaceholder } from '../../data/directions/social';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function SocialCase() {
  const { customer, task, solution, result, metrics, note, title } = socialCasePlaceholder;

  return (
    <section className="section social-case social-section--compact" id="social-case" aria-labelledby="social-case-title">
      <div className="container">
        <Reveal>
          <SectionHeader title={title} titleId="social-case-title" />
        </Reveal>
        <Reveal>
          <GlassSurface className="social-case__panel" radius="xl" depth="raised" tint="social">
            <div className="social-case__grid">
              <div>
                <p className="social-case__label">Заказчик</p>
                <p className="social-case__value">{customer}</p>
              </div>
              <div>
                <p className="social-case__label">Задача</p>
                <p className="social-case__value">{task}</p>
              </div>
              <div>
                <p className="social-case__label">Состав решения</p>
                <p className="social-case__value">{solution}</p>
              </div>
              <div>
                <p className="social-case__label">Результат</p>
                <p className="social-case__value">{result}</p>
              </div>
            </div>

            <div className="social-case__metrics">
              <p className="social-case__label">Показатели до и после</p>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Показатель</th>
                    <th scope="col">До внедрения</th>
                    <th scope="col">После внедрения</th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((row) => (
                    <tr key={row.metric}>
                      <td>{row.metric}</td>
                      <td>{row.before}</td>
                      <td>{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="social-case__note">{note}</p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

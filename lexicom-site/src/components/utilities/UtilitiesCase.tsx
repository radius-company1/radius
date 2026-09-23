import { utilitiesCasePlaceholder } from '../../data/directions/utilities';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function UtilitiesCase() {
  const { customer, task, solution, result, metrics, note, title } = utilitiesCasePlaceholder;

  return (
    <section
      className="section utilities-case utilities-section--compact"
      id="utilities-case"
      aria-labelledby="utilities-case-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader title={title} titleId="utilities-case-title" />
        </Reveal>
        <Reveal>
          <GlassSurface className="utilities-case__panel" radius="xl" depth="raised" tint="utilities">
            <div className="utilities-case__grid">
              <div>
                <p className="utilities-case__label">Заказчик</p>
                <p className="utilities-case__value">{customer}</p>
              </div>
              <div>
                <p className="utilities-case__label">Задача</p>
                <p className="utilities-case__value">{task}</p>
              </div>
              <div>
                <p className="utilities-case__label">Состав решения</p>
                <p className="utilities-case__value">{solution}</p>
              </div>
              <div>
                <p className="utilities-case__label">Результат</p>
                <p className="utilities-case__value">{result}</p>
              </div>
            </div>

            <div className="utilities-case__metrics">
              <p className="utilities-case__label">Показатели до и после</p>
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

            <p className="utilities-case__note">{note}</p>
          </GlassSurface>
        </Reveal>
      </div>
    </section>
  );
}

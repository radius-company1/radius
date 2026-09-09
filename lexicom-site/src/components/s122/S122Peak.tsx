import { s122PeakStreams } from '../../data/directions/s122';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Peak() {
  return (
    <section className="section s122-peak" id="s122-peak" aria-labelledby="s122-peak-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Когда обращений становится больше, система не должна превращаться в очередь"
            titleId="s122-peak-title"
            description="ИИ-контур параллельно обрабатывает типовые обращения и отдаёт операторам прежде всего те случаи, где требуется участие человека."
          />
        </Reveal>

        <Reveal>
          <div className="s122-peak__flow" aria-label="Распределение входящего потока">
            <div className="s122-peak__source surface-plain">
              <p className="s122-peak__source-label">Входящий поток</p>
              <p>Обращения службы 122</p>
            </div>
            <span className="s122-peak__connector" aria-hidden="true">
              →
            </span>
            <div className="s122-peak__streams">
              {s122PeakStreams.map((stream) => (
                <article key={stream.id} className={`s122-peak__stream s122-peak__stream--${stream.tone} surface-plain`}>
                  <h3>{stream.title}</h3>
                  <p>
                    → <strong>{stream.target}</strong>
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

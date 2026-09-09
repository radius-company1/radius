import { s122PeakStreams } from '../../data/directions/s122';
import { Reveal } from '../ui/Reveal';

export function S122Peak() {
  return (
    <section className="s122-peak s122-peak--compact" id="s122-peak" aria-labelledby="s122-peak-title">
      <div className="container">
        <Reveal>
          <div className="s122-peak__banner surface-plain">
            <h2 id="s122-peak-title" className="s122-peak__title">
              Когда обращений становится больше, система не должна превращаться в очередь
            </h2>
            <div className="s122-peak__flow" aria-label="Распределение входящего потока">
              <div className="s122-peak__source">
                <span className="s122-peak__source-label">Входящий поток</span>
              </div>
              <span className="s122-peak__connector" aria-hidden="true">
                →
              </span>
              <div className="s122-peak__streams">
                {s122PeakStreams.map((stream) => (
                  <p key={stream.id} className={`s122-peak__stream s122-peak__stream--${stream.tone}`}>
                    {stream.title} → <strong>{stream.target}</strong>
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

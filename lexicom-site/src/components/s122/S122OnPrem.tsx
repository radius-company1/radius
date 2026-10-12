import { s122PlacementNotes } from '../../data/directions/s122';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122OnPrem() {
  return (
    <section
      className="section section--ink s122-onprem s122-section--compact"
      id="s122-onprem"
      aria-labelledby="s122-onprem-title"
    >
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Размещение, доступ и ресурсы"
            titleId="s122-onprem-title"
            description="Платформа стоит у заказчика. Каналы, доступ к медицинским системам и ресурсы согласуются отдельно."
          />
        </Reveal>

        <Reveal>
          <ul className="s122-onprem__notes">
            {s122PlacementNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

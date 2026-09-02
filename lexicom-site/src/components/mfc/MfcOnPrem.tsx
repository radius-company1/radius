import { mfcOnPremPoints } from '../../data/directions/mfc';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcOnPrem() {
  return (
    <section className="section section--ink mfc-onprem" id="mfc-onprem" aria-labelledby="mfc-onprem-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Платформа работает внутри инфраструктуры заказчика"
            titleId="mfc-onprem-title"
            description="Lexicom разворачивается в контуре организации. Звонки, записи, данные обращений и отчётность остаются в инфраструктуре заказчика, а для работы контактного центра не требуется публичное облако."
          />
        </Reveal>

        <Reveal>
          <ul className="mfc-onprem__list">
            {mfcOnPremPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

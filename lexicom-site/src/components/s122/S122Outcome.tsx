import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Outcome() {
  return (
    <section className="section s122-outcome s122-section--compact" id="s122-outcome" aria-labelledby="s122-outcome-title">
      <div className="container">
        <Reveal>
          <SectionHeader title="Обращение должно закончиться результатом" titleId="s122-outcome-title" />
        </Reveal>

        <Reveal>
          <div className="s122-outcome__contrast">
            <div className="s122-outcome__side s122-outcome__side--low surface-plain">
              <p className="s122-outcome__side-label">Классический IVR / сценарный робот</p>
              <p>распознать команду → воспроизвести информацию</p>
            </div>
            <span className="s122-outcome__arrow" aria-hidden="true">
              →
            </span>
            <div className="s122-outcome__side s122-outcome__side--high surface-plain">
              <p className="s122-outcome__side-label">Lexicom</p>
              <p>понять → уточнить → получить данные → выполнить доступное действие → сообщить результат</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

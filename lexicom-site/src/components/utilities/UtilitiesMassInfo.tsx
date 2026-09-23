import {
  utilitiesMassExample,
  utilitiesMassNotes,
  utilitiesMassSteps,
} from '../../data/directions/utilities';
import { GlassSurface } from '../ui/GlassSurface';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function UtilitiesMassInfo() {
  return (
    <section
      className="section utilities-mass utilities-section--compact"
      id="utilities-mass"
      aria-labelledby="utilities-mass-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Один источник информации для всех каналов"
            titleId="utilities-mass-title"
          />
        </Reveal>

        <Reveal>
          <ol className="utilities-mass__steps" aria-label="Процесс информирования">
            {utilitiesMassSteps.map((step, index) => (
              <li key={step.title} className="utilities-mass__step">
                <span className="utilities-mass__num" aria-hidden="true">
                  {index + 1}
                </span>
                <GlassSurface className="utilities-mass__card" radius="lg" depth="raised" tint="utilities">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </GlassSurface>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="utilities-mass__example-wrap">
          <Reveal>
            <GlassSurface className="utilities-mass__example" radius="xl" depth="raised" tint="yellow">
              <p className="utilities-mass__label">Пример</p>
              <p className="utilities-mass__question">«{utilitiesMassExample.question}»</p>
              <p className="utilities-mass__answer">{utilitiesMassExample.answer}</p>
            </GlassSurface>
          </Reveal>
          <Reveal delay={60}>
            <ul className="utilities-mass__notes">
              {utilitiesMassNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

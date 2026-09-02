import { mfcAnalyticsDirections } from '../../data/directions/mfc';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function MfcAnalytics() {
  return (
    <section className="section mfc-analytics" id="mfc-analytics" aria-labelledby="mfc-analytics-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Каждый разговор показывает, что нужно улучшить"
            titleId="mfc-analytics-title"
            description="Lexicom разбирает диалоги и сводку по темам, сотрудникам и периодам — где повторы, где не хватает знаний."
          />
        </Reveal>

        <div className="mfc-analytics__grid">
          {mfcAnalyticsDirections.map((block, index) => (
            <Reveal key={block.title} delay={index * 60} className={index === 0 ? 'mfc-analytics__cell mfc-analytics__cell--featured' : 'mfc-analytics__cell'}>
              <article className="mfc-analytics__card surface-plain">
                <h3>{block.title}</h3>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mfc-analytics__cycle" aria-label="Цикл улучшений">
            <span>обращения</span>
            <span aria-hidden="true">→</span>
            <span>анализ</span>
            <span aria-hidden="true">→</span>
            <span>изменения</span>
            <span aria-hidden="true">→</span>
            <span>проверка следующих обращений</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

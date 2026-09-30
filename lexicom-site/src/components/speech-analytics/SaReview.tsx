import { saReviewShots, type SpeechAnalyticsShot } from '../../data/speechAnalyticsPage';
import { CcShot } from '../contact-center/CcShot';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

type SaReviewProps = {
  onOpenShot: (shot: SpeechAnalyticsShot, trigger: HTMLButtonElement) => void;
};

export function SaReview({ onOpenShot }: SaReviewProps) {
  return (
    <section className="section cc-workspace sa-review" id="sa-review" aria-labelledby="sa-review-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Разбор каждого разговора"
            titleId="sa-review-title"
            description="Расшифровка, тема, причины реакций, сводка и рекомендации — в карточке звонка."
          />
        </Reveal>

        <div className="cc-workspace__grid">
          {saReviewShots.map((shot, index) => (
            <Reveal key={shot.id} delay={(index % 2) * 80}>
              <figure className="cc-workspace__item">
                <CcShot shot={shot} onOpen={onOpenShot} sizes="(min-width: 900px) 560px, calc(100vw - 2rem)" />
                <figcaption className="cc-workspace__caption">
                  <h3>{shot.caption}</h3>
                  <ul>
                    {shot.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { kuzbassMfcCase as item } from '../data/mfcCases';
import { GlassSurface } from './ui/GlassSurface';
import { MotionLink as Link } from './ui/MotionLink';
import { Reveal } from './ui/Reveal';
import '../styles/mfc-case.css';

export function MfcCaseFeature() {
  return (
    <Reveal variant="fade">
      <GlassSurface as="article" className="mfc-case-feature" radius="xl" tint="yellow" tier="matte">
        <div className="mfc-case-feature__award">
          <span className="mfc-case__eyebrow">{item.region}</span>
          <strong>{item.award.place}</strong>
          <p>«{item.award.category}»</p>
          <span>Конкурс «Лучший МФЦ России» {item.award.period}</span>
        </div>
        <div className="mfc-case-feature__body">
          <h3>{item.title}</h3>
          <p>{item.summary}</p>
          <Link className="mfc-case__link" to={item.href}>
            Как устроен помощник <span aria-hidden="true">→</span>
          </Link>
        </div>
      </GlassSurface>
    </Reveal>
  );
}

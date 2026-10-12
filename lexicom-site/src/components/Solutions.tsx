import { useCallback, useRef, useState } from 'react';
import { organizationBenefits } from '../data/benefits';
import { productDemoById, type ProductDemo } from '../data/productDemos';
import { platformFlow } from '../data/solutions';
import { ProductDemoTrigger } from './ProductDemoTrigger';
import { VideoDemoModal } from './VideoDemoModal';
import { FlowDiagram } from './ui/FlowDiagram';
import { GlassSurface } from './ui/GlassSurface';
import { Reveal } from './ui/Reveal';
import { SectionHeader } from './ui/SectionHeader';

const togetherDemo = productDemoById['contact-center'];

export function Solutions() {
  const [activeDemo, setActiveDemo] = useState<ProductDemo | null>(null);
  const returnFocusRef = useRef<HTMLButtonElement | null>(null);

  const onOpenDemo = useCallback((demo: ProductDemo, trigger: HTMLButtonElement | null) => {
    returnFocusRef.current = trigger;
    setActiveDemo(demo);
  }, []);

  return (
    <section
      className="section section-zone section-zone--platform section-zone--solutions solutions"
      id="platform"
      aria-labelledby="platform-title"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Как продукты работают вместе"
            titleId="platform-title"
            description="Обращение принимается, на него даётся ответ или выполняется действие, при необходимости подключается сотрудник, результат анализируется. Продукты могут работать отдельно и подключаться к системам заказчика."
          />
        </Reveal>

        <div className="solutions__together">
          <Reveal>
            <div className="surface-plain solutions__flow-wrap solutions__flow-wrap--primary">
              <FlowDiagram steps={platformFlow} compact className="solutions__flow" />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <GlassSurface className="solutions__demo" radius="xl" depth="raised" tint="blue">
              <p className="solutions__demo-label">Рабочее место контактного центра</p>
              <ProductDemoTrigger
                demo={togetherDemo}
                onOpen={() => onOpenDemo(togetherDemo, returnFocusRef.current)}
              />
              <p className="solutions__demo-note">Запись интерфейса, не живой ИИ.</p>
            </GlassSurface>
          </Reveal>
        </div>

        <Reveal>
          <ul className="benefits__cloud solutions__benefits">
            {organizationBenefits.map((benefit, index) => (
              <li key={benefit} className={`benefits__chip benefits__chip--${index % 4}`}>
                <span className="benefits__dot" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <VideoDemoModal demo={activeDemo} onClose={() => setActiveDemo(null)} returnFocusRef={returnFocusRef} />
    </section>
  );
}

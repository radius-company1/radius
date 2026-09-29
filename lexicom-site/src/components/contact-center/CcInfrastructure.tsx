import { infrastructurePoints } from '../../data/contactCenterPage';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const connections = ['Телефония', 'Информационные системы', 'Роли и права доступа'] as const;

export function CcInfrastructure() {
  return (
    <section className="section section--ink cc-infra" id="cc-infrastructure" aria-labelledby="cc-infra-title">
      <div className="section--ink__grid-bg" aria-hidden="true" />
      <div className="container cc-infra__layout">
        <div>
          <Reveal>
            <SectionHeader
              title="В вашей инфраструктуре, с учётом действующих систем"
              titleId="cc-infra-title"
              description="Контактный центр Lexicom разворачивается на ресурсах заказчика. Настраиваем роли и права доступа, подключение телефонии и обмен данными с информационными системами."
            />
          </Reveal>
          <Reveal delay={60}>
            <ul className="cc-infra__points">
              {infrastructurePoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="cc-infra__note">Подключение внешних каналов согласуется отдельно с учётом требований заказчика.</p>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <figure className="cc-infra__scheme" aria-label="Контактный центр Lexicom на ресурсах заказчика">
            <div className="cc-infra__perimeter">
              <span className="cc-infra__perimeter-label">Ресурсы заказчика</span>
              <div className="cc-infra__core">
                <strong>Контактный центр Lexicom</strong>
              </div>
              <ul className="cc-infra__links">
                {connections.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

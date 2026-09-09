import { s122Channels, s122ArchitectureLayers } from '../../data/directions/s122';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

const systemsLayer = s122ArchitectureLayers.find((layer) => layer.id === 'systems');
const platformItems =
  s122ArchitectureLayers.find((layer) => layer.id === 'platform')?.items ?? [];

export function S122Integration() {
  return (
    <section className="section s122-integration" id="s122-integration" aria-labelledby="s122-integration-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Один процесс — от канала до систем заказчика"
            titleId="s122-integration-title"
            description="Каналы подключаются к общей бизнес-логике Lexicom. Операции в информационных системах выполняются через интеграционный слой — в зависимости от архитектуры проекта и при наличии соответствующих API."
          />
        </Reveal>

        <Reveal>
          <div className="s122-arch-board" aria-label="Архитектура каналов, платформы и систем">
            <div className="s122-arch-board__col surface-plain">
              <p className="s122-arch-board__label">Каналы</p>
              <ul className="s122-arch-board__list">
                {s122Channels.map((channel) => (
                  <li key={channel.id}>
                    <strong>{channel.title}</strong>
                    <span>{channel.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="s122-arch-board__center surface-plain">
              <p className="s122-arch-board__label">Lexicom</p>
              <ul className="s122-arch-board__chips">
                {platformItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="s122-arch-board__bridge">Интеграционный слой</p>
            </div>

            <div className="s122-arch-board__col s122-arch-board__col--systems surface-plain">
              <p className="s122-arch-board__label">Системы заказчика</p>
              <ul className="s122-arch-board__list">
                {(systemsLayer?.items ?? []).map((item) => (
                  <li key={item}>
                    <strong>{item}</strong>
                  </li>
                ))}
              </ul>
              {systemsLayer && 'caveat' in systemsLayer && systemsLayer.caveat ? (
                <p className="s122-arch-board__caveat">{systemsLayer.caveat}</p>
              ) : null}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

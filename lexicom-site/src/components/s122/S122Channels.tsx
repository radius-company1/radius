import { s122Channels } from '../../data/directions/s122';
import { Reveal } from '../ui/Reveal';
import { SectionHeader } from '../ui/SectionHeader';

export function S122Channels() {
  return (
    <section className="section s122-channels s122-section--compact" id="s122-channels" aria-labelledby="s122-channels-title">
      <div className="container">
        <Reveal>
          <SectionHeader
            title="Один процесс — в разных каналах"
            titleId="s122-channels-title"
            description="Новые каналы подключаются к общей бизнес-логике и интеграционному контуру проекта."
          />
        </Reveal>

        <div className="s122-channels__row">
          {s122Channels.map((channel, index) => (
            <Reveal key={channel.id} delay={index * 40}>
              <article className="s122-channels__item surface-plain">
                <h3>{channel.title}</h3>
                <p>{channel.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

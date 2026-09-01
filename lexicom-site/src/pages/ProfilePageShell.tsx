import { GlassSurface } from '../components/ui/GlassSurface';

type ProfilePageShellProps = {
  title: string;
  directionLabel: string;
};

export function ProfilePageShell({ title, directionLabel }: ProfilePageShellProps) {
  return (
    <div className="page-view page-view--profile" style={{ viewTransitionName: 'page-content' } as React.CSSProperties}>
      <main className="profile-stub">
        <div className="container">
          <GlassSurface className="profile-stub__card" radius="xl" depth="float" tint="cyan">
            <p className="profile-stub__eyebrow">Профильное направление</p>
            <h1 className="profile-stub__title" style={{ viewTransitionName: 'hero-title' } as React.CSSProperties}>
              {title}
            </h1>
            <p className="profile-stub__mode">{directionLabel}</p>
            <p className="profile-stub__text">
              Профильная страница в разработке. Содержание и демонстрации появятся в следующей версии.
            </p>
          </GlassSurface>
        </div>
      </main>
    </div>
  );
}

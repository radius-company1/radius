export type IconName = 'arrow-right' | 'arrow-left' | 'arrow-up-right' | 'arrow-down' | 'arrow-up' | 'plus' | 'close' | 'check' | 'play' | 'pause' | 'chevron-down' | 'download' | 'alert' | 'trend-up' | 'users' | 'chart' | 'phone' | 'shield';

const paths: Record<IconName, string> = {
  'arrow-right': 'M4 10h11m-4.5-4.5L15 10l-4.5 4.5',
  'arrow-left': 'M16 10H5m4.5-4.5L5 10l4.5 4.5',
  'arrow-up-right': 'M6 14 14 6m-6.5 0H14v6.5',
  'arrow-down': 'M10 4v11m-4.5-4.5L10 15l4.5-4.5',
  'arrow-up': 'M10 16V5M5.5 9.5 10 5l4.5 4.5',
  plus: 'M10 4.5v11M4.5 10h11',
  close: 'm5.5 5.5 9 9m0-9-9 9',
  check: 'm4.5 10.5 3.5 3.5 7.5-8',
  play: 'M7 5.5v9l7-4.5z',
  pause: 'M7.5 5.5v9m5-9v9',
  'chevron-down': 'm5.5 8 4.5 4.5L14.5 8',
  download: 'M10 3.5v9m-4-4 4 4 4-4M4.5 16h11',
  alert: 'M10 5v6.5m0 3.3v.1',
  'trend-up': 'M3.5 14 8 9.5l3 3 5.5-6m-4 0h4v4',
  users: 'M7.5 9.5a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5ZM2.5 16.5a5 5 0 0 1 10 0M13 4.3a2.75 2.75 0 0 1 0 5M14.8 12.2a5 5 0 0 1 2.7 4.3',
  chart: 'M3.5 16.5h13M6 13.5V10m4 3.5v-8m4 8V8',
  phone: 'M7.2 3.5H5a1.5 1.5 0 0 0-1.5 1.6 12 12 0 0 0 11.4 11.4 1.5 1.5 0 0 0 1.6-1.5v-2.2l-3.2-1.3-1.6 1.6a8.5 8.5 0 0 1-3.7-3.7l1.6-1.6z',
  shield: 'M10 3 4.5 5v4.6c0 3.4 2.3 5.9 5.5 7.4 3.2-1.5 5.5-4 5.5-7.4V5zM7.5 10l1.8 1.8 3.4-3.4',
};

type IconProps = { name: IconName; size?: number; className?: string };

export function Icon({ name, size = 16, className = '' }: IconProps) {
  const filled = name === 'play';
  return (
    <svg
      className={`icon icon--${name} ${className}`.trim()}
      viewBox="0 0 20 20"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth={filled ? 0 : 1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[name]} />
    </svg>
  );
}

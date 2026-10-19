import { isValidElement, type ReactNode } from 'react';
import { useOnceInView } from '../../hooks/useOnceInView';
import { SectionHeader } from './SectionHeader';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'auto' | 'rise' | 'fade' | 'media';
};

export function Reveal({ children, className = '', delay = 0, variant = 'auto' }: RevealProps) {
  const ref = useOnceInView<HTMLDivElement>();
  const effect = variant === 'auto'
    ? (isValidElement(children) && children.type === SectionHeader ? 'fade' : 'rise')
    : variant;
  return <div ref={ref} className={`reveal reveal--${effect} ${className}`}
    style={{ transitionDelay: `${Math.min(200, Math.max(0, delay))}ms` }}>{children}</div>;
}

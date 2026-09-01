import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'ghost-light';

type BaseProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type LinkProps = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button({
  variant = 'primary',
  children,
  className = '',
  href,
  ...rest
}: ButtonProps | LinkProps) {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (href) {
    const linkRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} href={href} {...linkRest}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type={buttonRest.type ?? 'button'} className={classes} {...buttonRest}>
      {children}
    </button>
  );
}

import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'ghost-light';

type BaseProps = {
  variant?: Variant;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonAsButton | ButtonAsLink>(
  function Button({ variant = 'primary', children, className = '', href, ...rest }, ref) {
    const classes = `btn btn--${variant} ${className}`.trim();

    if (href) {
      const linkRest = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a className={classes} href={href} ref={ref as React.Ref<HTMLAnchorElement>} {...linkRest}>
          {children}
        </a>
      );
    }

    const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button
        type={buttonRest.type ?? 'button'}
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...buttonRest}
      >
        {children}
      </button>
    );
  },
);

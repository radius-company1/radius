import { forwardRef } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { useViewTransitionNavigate } from '../../hooks/useViewTransitionNavigate';

/** Internal navigation shares one transition policy; modified clicks remain native. */
export const MotionLink = forwardRef<HTMLAnchorElement, LinkProps>(function MotionLink({ onClick, ...props }, ref) {
  const { onLinkClick } = useViewTransitionNavigate();
  return <Link ref={ref} {...props} onClick={event => {
    onClick?.(event);
    if (event.defaultPrevented || props.reloadDocument || props.download || (props.target && props.target !== '_self')) return;
    if (typeof props.to !== 'string' || !props.to.startsWith('/') || props.to.startsWith('//')) return;
    onLinkClick(event, props.to);
  }} />;
});

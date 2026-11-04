import { useId, type KeyboardEvent } from 'react';

export function useScenarioTabs<T extends string>(ids: readonly T[], active: T, select: (id: T) => void) {
  const prefix = useId();
  return {
    tabProps: (id: T) => ({
      id: `${prefix}-tab-${id}`,
      role: 'tab' as const,
      'aria-selected': active === id,
      'aria-controls': `${prefix}-panel`,
      tabIndex: active === id ? 0 : -1,
      onClick: () => select(id),
      onKeyDown: (event: KeyboardEvent<HTMLButtonElement>) => {
        const index = ids.indexOf(id);
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? ids.length - 1
          : event.key === 'ArrowRight' ? (index + 1) % ids.length
          : event.key === 'ArrowLeft' ? (index + ids.length - 1) % ids.length : -1;
        if (next < 0) return;
        event.preventDefault();
        select(ids[next]);
        document.getElementById(`${prefix}-tab-${ids[next]}`)?.focus();
      },
    }),
    panelProps: {
      id: `${prefix}-panel`, role: 'tabpanel' as const,
      'aria-labelledby': `${prefix}-tab-${active}`, tabIndex: 0,
    },
  };
}

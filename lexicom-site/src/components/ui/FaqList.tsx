import { useId, useState } from 'react';
import { Icon } from './Icon';

type FaqItem = {
  question: string;
  answer: string;
};

type FaqListProps = {
  items: readonly FaqItem[];
  className?: string;
};

export function FaqList({ items, className = '' }: FaqListProps) {
  const baseId = useId();
  const [open, setOpen] = useState<Set<number>>(() => new Set());
  const toggle = (index: number) => setOpen((current) => {
    const next = new Set(current);
    if (next.has(index)) next.delete(index); else next.add(index);
    return next;
  });

  return (
    <ul className={`faq-list ${className}`.trim()}>
      {items.map((item, index) => {
        const isOpen = open.has(index);
        const panelId = `${baseId}-faq-${index}`;
        return (
          <li key={item.question} className={`faq-list__item${isOpen ? ' is-open' : ''}`}>
            <h3 className="faq-list__heading">
              <button type="button" className="faq-list__trigger" aria-expanded={isOpen} aria-controls={panelId} onClick={() => toggle(index)}>
                <span className="faq-list__q">{item.question}</span>
                <span className="faq-list__icon"><Icon name="plus" size={18} /></span>
              </button>
            </h3>
            <div id={panelId} className="disclosure-panel" inert={!isOpen}>
              <div className="disclosure-panel__inner">
                <p className="faq-list__a">{item.answer}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

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
  return (
    <ul className={`faq-list ${className}`.trim()}>
      {items.map((item) => (
        <li key={item.question} className="faq-list__item">
          <details className="faq-list__disclosure">
            <summary className="faq-list__trigger">
              <span className="faq-list__q">{item.question}</span>
              <span className="faq-list__icon"><Icon name="plus" size={18} /></span>
            </summary>
            <p className="faq-list__a">{item.answer}</p>
          </details>
        </li>
      ))}
    </ul>
  );
}

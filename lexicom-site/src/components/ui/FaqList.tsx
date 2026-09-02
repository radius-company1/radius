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
          <h3 className="faq-list__q">{item.question}</h3>
          <p className="faq-list__a">{item.answer}</p>
        </li>
      ))}
    </ul>
  );
}

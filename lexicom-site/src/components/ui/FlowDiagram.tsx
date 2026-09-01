type FlowDiagramProps = {
  steps: readonly string[];
  variant?: 'light' | 'dark';
  compact?: boolean;
  className?: string;
};

export function FlowDiagram({ steps, variant = 'light', compact = false, className = '' }: FlowDiagramProps) {
  return (
    <div
      className={`flow-diagram flow-diagram--${variant} ${compact ? 'flow-diagram--compact' : ''} ${className}`}
      role="img"
      aria-label={steps.join(' → ')}
    >
      <ol className="flow-diagram__list">
        {steps.map((step, index) => (
          <li key={step} className="flow-diagram__item">
            <span className="flow-diagram__node">{step}</span>
            {index < steps.length - 1 ? (
              <span className="flow-diagram__arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

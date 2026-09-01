import { GlassSurface as MainGlass } from './ui/GlassSurface';
import './HeroFlowChart.css';

export type FlowNodeDef = {
  id: string;
  label: string;
  status?: string;
  core?: boolean;
  support?: boolean;
  kind?: 'channel' | 'core' | 'neurobot' | 'employee' | 'knowledge' | 'system' | 'analytics';
};

export const flowNodes: FlowNodeDef[] = [
  { id: 'in', label: 'Входящее обращение', status: 'Канал', kind: 'channel' },
  { id: 'core', label: 'Lexicom', status: 'Ядро', core: true, kind: 'core' },
  { id: 'bot', label: 'Нейробот', status: 'ИИ', kind: 'neurobot' },
  { id: 'emp', label: 'Сотрудник', status: 'Оператор', kind: 'employee' },
  { id: 'kb', label: 'База знаний', status: 'Знания', support: true, kind: 'knowledge' },
  { id: 'sys', label: 'Система заказчика', status: 'ИС', support: true, kind: 'system' },
  { id: 'ana', label: 'Аналитика результата', status: 'Контроль', kind: 'analytics' },
];

type HeroFlowChartProps = {
  variant?: 'default' | 'liquid';
  showTitle?: boolean;
  className?: string;
};

function FlowNode({
  node,
  variant,
}: {
  node: FlowNodeDef;
  variant: 'default' | 'liquid';
}) {
  const tint = node.core ? 'violet' : node.support ? 'cyan' : 'blue';
  const depth = node.core ? 'float' : 'raised';

  const content = (
    <>
      {node.status ? <span className="hfc-node__status">{node.status}</span> : null}
      <span className="hfc-node__label">{node.label}</span>
    </>
  );

  if (variant === 'liquid') {
    const kind = node.kind ?? 'channel';
    return (
      <div
        className={`hfc-node hfc-node--${node.id} hfc-node--kind-${kind} ${node.core ? 'hfc-node--core' : ''} ${node.support ? 'hfc-node--support' : ''}`}
      >
        <div className={`hfc-node__glass hfc-node__glass--${kind}`}>
          {node.core ? <span className="hfc-node__mark" aria-hidden="true">◆</span> : null}
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className={`hfc-node hfc-node--${node.id} ${node.core ? 'hfc-node--core' : ''} ${node.support ? 'hfc-node--support' : ''}`}>
      <MainGlass
        className="hfc-node__card"
        radius={node.core ? 'lg' : 'md'}
        tint={tint}
        depth={depth}
      >
        {content}
      </MainGlass>
    </div>
  );
}

function node(id: string) {
  return flowNodes.find((n) => n.id === id)!;
}

export function HeroFlowChart({ variant = 'default', showTitle = false, className = '' }: HeroFlowChartProps) {
  return (
    <div className={`hfc-wrap hfc-wrap--${variant} ${className}`}>
      {showTitle ? <p className="hfc-wrap__title">Схема обработки обращения</p> : null}

      <div className="hfc" role="img" aria-label="Схема обработки обращения в платформе Lexicom">
        <div className="hfc__lane hfc__lane--main">
          <FlowNode node={node('in')} variant={variant} />
          <div className="hfc__pipe hfc__pipe--down hfc__pipe--active" aria-hidden="true">
            <span className="hfc__pipe-signal" />
          </div>

          <div className="hfc__hub">
            <div className="hfc__hub-side hfc__hub-side--left">
              <FlowNode node={node('kb')} variant={variant} />
              <div className="hfc__pipe hfc__pipe--right" aria-hidden="true" />
            </div>

            <div className="hfc__hub-center">
              <FlowNode node={node('core')} variant={variant} />
            </div>

            <div className="hfc__hub-side hfc__hub-side--right">
              <div className="hfc__pipe hfc__pipe--left hfc__pipe--active" aria-hidden="true">
                <span className="hfc__pipe-signal" />
              </div>
              <FlowNode node={node('bot')} variant={variant} />
            </div>
          </div>

          <div className="hfc__branch">
            <div className="hfc__branch-left">
              <FlowNode node={node('sys')} variant={variant} />
              <div className="hfc__pipe hfc__pipe--up-right" aria-hidden="true" />
            </div>

            <div className="hfc__branch-right">
              <div className="hfc__pipe hfc__pipe--down hfc__pipe--active" aria-hidden="true">
                <span className="hfc__pipe-signal" />
              </div>
              <FlowNode node={node('emp')} variant={variant} />
            </div>
          </div>

          <div className="hfc__pipe hfc__pipe--merge hfc__pipe--active" aria-hidden="true">
            <span className="hfc__pipe-signal hfc__pipe-signal--delay" />
          </div>

          <FlowNode node={node('ana')} variant={variant} />
        </div>

        <ul className="hfc__markers" aria-label="Этапы маршрута">
          <li>обращение принято</li>
          <li>найден контекст</li>
          <li>передано сотруднику</li>
          <li>результат проанализирован</li>
        </ul>
      </div>
    </div>
  );
}

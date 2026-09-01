import { useEffect, useMemo, useState } from 'react';
import { directions } from '../data/directions';
import { metrics } from '../data/metrics';
import { DirectionCard } from './components/DirectionCard';
import { FloatingMetric } from './components/FloatingMetric';
import { HeroFlow } from './components/HeroFlow';
import { LiquidBackground } from './components/LiquidBackground';
import { LiquidSwitcher } from './components/LiquidSwitcher';
import { PreviewHeader } from './components/PreviewHeader';
import { getThemeById, type PreviewThemeId } from './themes';
import './design-preview.css';

const metricVariants = ['a', 'b', 'c'] as const;

export function DesignPreviewPage() {
  const [themeId, setThemeId] = useState<PreviewThemeId>('overview');
  const theme = useMemo(() => getThemeById(themeId), [themeId]);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme.cssVars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    root.dataset.previewTheme = themeId;
    return () => {
      Object.keys(theme.cssVars).forEach((key) => root.style.removeProperty(key));
      delete root.dataset.previewTheme;
    };
  }, [theme, themeId]);

  return (
    <div className="design-preview" data-theme={themeId}>
      <LiquidBackground accentX={themeId === 'overview' ? 28 : 32} accentY={62} />
      <PreviewHeader />
      <LiquidSwitcher active={themeId} onChange={setThemeId} />

      <main className="design-preview__main">
        <section className="dp-hero" id="top" aria-labelledby="dp-hero-title">
          <div className="design-preview__container dp-hero__grid">
            <div className="dp-hero__content">
              <p className="dp-hero__eyebrow">Российский вендор собственного программного обеспечения</p>
              <h1 id="dp-hero-title" className="dp-hero__title">
                Единая ИИ-платформа для работы с обращениями
              </h1>
              <p className="dp-hero__lead">
                Lexicom объединяет ИИ-ассистентов, контактный центр, базу знаний, робот-суфлёр и речевую аналитику.
                Платформа принимает звонки и сообщения, обрабатывает типовые вопросы и передаёт сложные обращения
                сотрудникам вместе с собранной информацией. Решение разворачивается в инфраструктуре заказчика и
                подключается к действующим каналам и информационным системам.
              </p>
              <div className="dp-hero__actions">
                <a className="dp-btn dp-btn--primary" href="#dp-directions">
                  Выбрать своё направление
                </a>
                <button type="button" className="dp-btn dp-btn--glass">
                  Обсудить проект
                </button>
              </div>
              <p className="dp-hero__trust">
                Собственное ПО · On-prem · Данные в контуре заказчика · Реестр российского ПО №11115
              </p>
            </div>
            <div className="dp-hero__viz">
              <HeroFlow />
            </div>
          </div>

          <div className="design-preview__container dp-metrics">
            {metrics.map((metric, index) => (
              <FloatingMetric
                key={metric.label}
                value={metric.value}
                label={metric.label}
                variant={metricVariants[index] ?? 'a'}
              />
            ))}
          </div>
        </section>

        <section className="dp-directions" id="dp-directions" aria-labelledby="dp-directions-title">
          <div className="design-preview__container">
            <header className="dp-section-header">
              <p className="dp-section-header__eyebrow">Решения для государственных организаций</p>
              <h2 id="dp-directions-title" className="dp-section-header__title">
                Выберите своё направление
              </h2>
              <p className="dp-section-header__description">
                Задачи МФЦ, службы 122 и ЕДДС различаются. Поэтому для каждого направления создана отдельная страница
                со своими сценариями, адаптированным составом решения, кейсами и демонстрацией.
              </p>
            </header>
            <div className="dp-directions__grid">
              {directions.map((direction) => (
                <DirectionCard key={direction.id} direction={direction} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

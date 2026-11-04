# Проверки и изменения

29.10.2026. Работа локальная, без git push, публикации и изменений DNS.

- `npm run build` и `npm run build:launch` — успешно; TypeScript без ошибок.
- `npm run verify:launch` — 13 страниц, уникальные метаданные, canonical/OG, JSON-LD, ассеты, 12 slash-301 + 13 index-301, 3 настоящих 404 на локальном проверочном сервере.
- Chrome: 42 прямых открытия (13 страниц + 404 × мобильный JS / настольный JS / настольный без JS), без ошибок JS и горизонтального переполнения; один H1.
- Переход главная → ИИ-агент → главная на 390 и 1440 px: восстановление title и актуальный JSON-LD. На 404 разметки нет.
- Первый экран визуально просмотрен на 390 и 1440 px. Скриншоты находятся в рабочем артефакте `artifacts/seo-research-2026-10-29/`.
- `npm exec -- oxlint src` — завершился без сообщений. Общий `npm run lint` сканирует также старый сгенерированный `.vite-experiment/deps` и выдаёт 1330 предупреждений; это не трактуется как 1330 новых проблем исходника. Общий кэш/настройки lint не менялись.
- Vite сохраняет предупреждение о размере JS. Полевые показатели скорости не измерены.

Семантика: 268 уникальных нормализованных фраз, 24 кластера, 13 существующих целевых страниц; частотности пусты. Это фразы-кандидаты с тематическими источниками, не экспорт подтверждённых запросов пользователей. Дополнительные темы и связи в page-map/roadmap — план, не уже созданные страницы.

Документы с источниками и CSV находятся в этой папке. Метаданные до/после — `metadata.json`. Ни новые цены, ни отзывы, ни результаты внедрений не добавлялись. Результаты публичного сайта после будущего выпуска пока не проверены.

## Изменённые и добавленные файлы

- `docs/seo/keyword-map.md`
- `docs/seo/research-2026-10-29/README.md`
- `docs/seo/research-2026-10-29/clusters.md`
- `docs/seo/research-2026-10-29/evidence/browser-checks.json`
- `docs/seo/research-2026-10-29/evidence/build-launch.log`
- `docs/seo/research-2026-10-29/evidence/build-pages.log`
- `docs/seo/research-2026-10-29/evidence/html-audit.json`
- `docs/seo/research-2026-10-29/evidence/lint-src.log`
- `docs/seo/research-2026-10-29/evidence/search-log-complete.json`
- `docs/seo/research-2026-10-29/evidence/verify.log`
- `docs/seo/research-2026-10-29/excluded-queries.md`
- `docs/seo/research-2026-10-29/landing-plan.md`
- `docs/seo/research-2026-10-29/metadata.json`
- `docs/seo/research-2026-10-29/metadata.md`
- `docs/seo/research-2026-10-29/page-map.md`
- `docs/seo/research-2026-10-29/research.md`
- `docs/seo/research-2026-10-29/roadmap.md`
- `docs/seo/research-2026-10-29/semantic-core.csv`
- `docs/seo/research-2026-10-29/semantic-core.json`
- `docs/seo/research-2026-10-29/technical-audit.md`
- `docs/seo/research-2026-10-29/verification.md`
- `docs/seo/research-2026-10-29/wordstat-seeds.txt`
- `scripts/prerender.mjs`
- `scripts/verify-launch.mjs`
- `src/components/DesignHero.tsx`
- `src/data/contactCenterPage.ts`
- `src/data/directions/business.ts`
- `src/data/directions/edds.ts`
- `src/data/directions/education.ts`
- `src/data/directions/mfc.ts`
- `src/data/directions/s122.ts`
- `src/data/directions/social.ts`
- `src/data/directions/utilities.ts`
- `src/data/ekcPage.ts`
- `src/data/faq.ts`
- `src/data/neurobotPage.ts`
- `src/data/protocolPage.ts`
- `src/data/speechAnalyticsPage.ts`
- `src/entry-server.tsx`
- `src/hooks/usePageMeta.ts`
- `src/seo.ts`
- `src/seoStructuredData.ts`

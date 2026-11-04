# Проверки и изменённые файлы

Дата: 29.10.2026. Рабочий исходник: `/Users/romaborovik/lexicom-final-experiment/2026-10-14/final`. Изолированная проверка: `/Users/romaborovik/Desktop/lexicom_landing/artifacts/seo-audit-2026-10-29/site`.

## Автоматические проверки

| Проверка | Результат и границы |
|---|---|
| `npm run build` | Успешно; тестовая Pages-сборка, 16 HTML с noindex (14 страниц + 404 + design-preview), пустой sitemap, разрешён обход |
| `npm run build:launch` | Успешно; TypeScript + клиентская и серверная сборки + пререндер |
| `npm run verify:launch` | 14 страниц; уникальные title/description; canonical/OG/schema; существование ресурсов; 13 redirect без slash, 14 index.html redirect; 3 настоящих HTTP 404 на локальном сервере |
| `npm exec -- oxlint src` | Успешно для исходного кода src; не заявление о проверке всех исторических артефактов |
| Browser: 14 × 2 | Ширины 390/1440, 28 открытий: один H1, нет горизонтального переполнения и ошибок React/JS |
| Сохранение DOM | Исходный элемент H1 остаётся тем же после запуска React на главной |
| JS disabled / JS blocked | Главная, /company/, /products/neurobot/: 6 проверок, скрытых reveal нет; форма POST, поля и кнопка отключены |
| Взаимодействия | Увеличение изображения, видео и закрытие Escape; главная → продукт → главная; canonical обновляется; форма активируется после готовности; 390/1440 |
| axe | Главная WCAG 2A/2AA/2.1AA, нарушений в итоговом запуске не обнаружено; не полный ручной аудит доступности |
| Обход HTML | 14 страниц, нет отсутствующих внутренних целей/якорей и повторяющихся ID; у изображений alt и размеры. Три юридические ссылки # остаются известными заглушками |
| Lighthouse mobile | Один замер до, два после; JSON с настройками и метриками в evidence/lighthouse-summary.json |

Проверки браузером автоматические. Полный ручной визуальный просмотр всех страниц, скринридер, реальная доставка писем/форм, действия в поисковых кабинетах и посещение сайта пользователями не проверены.

## Публичные ответы

`evidence/public-http.json` фиксирует текущий основной домен и опубликованную Pages-копию, а не результат публикации этих исправлений. Для неизвестного URL Python-запрос записал промежуточный 308. Дополнительный `curl -sSI -L` подтвердил цепочку 308 → 404; оснований объявлять этот URL soft 404 нет. WWW проверялся без отключения проверки сертификата (`curl` код 60).

## Воспроизведение

Из папки проекта выполнить `npm run build:launch`, затем `npm run verify:launch`. Это локальные тесты; код 301 в проверочном сервере не означает, что такие правила применены на Apache или GitHub Pages.

Для повторения лабораторных тестов запустить `PORT=5243 node scripts/serve-static.mjs`. Lighthouse использован из отдельной временной установки версии 13.6.0, Playwright — из среды Codex, axe-core 4.10.3. Эти зависимости не добавлялись в package.json проекта.

Команда Lighthouse: `node /tmp/lexicom-seo-audit-tools/node_modules/lighthouse/cli/index.js http://127.0.0.1:5243/ --quiet --chrome-flags='--headless' --only-categories=performance,accessibility,best-practices,seo --output=json --output=html --output-path=../lighthouse-repeat`.

Скрипты проверок сохранены в `artifacts/seo-audit-2026-10-29/checks/` в основном workspace. Они привязаны к локальным путям инструментов и порту; это воспроизводимый снимок текущей среды, а не переносимый тестовый пакет. Полные Lighthouse HTML/JSON и build-логи сохранены рядом. Отсутствие сжатия/кэша на этом сервере, нагрузка компьютера и симуляция сети ограничивают сравнение с production.

## Изменения кода

- `src/main.tsx`: гидратация готового HTML.
- `src/hooks/useClientReady.ts`: одинаковый первый рендер сервера и браузера.
- `src/components/ChatWidget.tsx`, `ImageLightbox.tsx`, `VideoDemoModal.tsx`: подключение порталов после готовности браузера.
- `src/components/ContactForm.tsx`: защита формы до подключения JS, POST, уникальный ID, контактный fallback. Доставка не реализована.
- `src/hooks/useOnceInView.ts`, `src/styles/motion.css`: видимый текст при сбое JS и без повторного скрытия основного текста первого экрана.
- `src/components/Implementation.tsx`: корректная структура списка.
- `src/components/DesignProducts.tsx`: доступные названия кнопок.
- `scripts/prerender.mjs`: согласованные настройки noindex/robots для тестовой сборки.
- `scripts/verify-launch.mjs`: перечень страниц из реестра и контроль повторных ID.

Документы: новый каталог `docs/seo/deep-audit-2026-10-29/` и указатель в `docs/seo/research-2026-10-29/README.md`. Полный перечень переданных файлов и проверка SHA-256 — `changed-files.json`/`sync-result.json` в папке артефактов. Копии заменяемых файлов — `before/`. Исходные цены, реквизиты, новый email и /company/ сохранены.

Публикация, DNS, серверные настройки и поисковые аккаунты не менялись.

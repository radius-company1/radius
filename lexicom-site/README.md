# Корпоративный сайт Lexicom

React + Vite, 17 страниц с готовым HTML для поисковых систем.

Единственный локальный источник: `/Users/romaborovik/lexicom-final-experiment/2026-10-14/final`. Клон публикации: `projects/tula/lexicom-site` в рабочем пространстве `lexicom_landing`, репозиторий `radius-company1/radius`.

## Разработка и проверки

```sh
npm ci
npm run dev
npm run build:launch
npm run verify:launch
npm exec -- oxlint src scripts server vite.config.ts
```

`build:launch` создаёт `dist/` для основного домена. `npm run build` создаёт предварительную версию для GitHub Pages по пути `/radius/lexicom/` с noindex. HTML формируется для каждого маршрута; неизвестный маршрут получает отдельную 404.

## Публикация

Перенести актуальные исходники в клон публикации, затем из `projects/tula` выполнить `bash scripts/deploy-lexicom.sh`. Команда готовит `lexicom/`; публикация происходит после commit/push в `main`. Проверять завершение GitHub Pages и содержимое открытых страниц. Не менять DNS или действующий lexicom.ai без отдельного поручения.

## Заявки

Сервер и инструкция подготовлены для специалиста: [подключение почты и формы](docs/contact-form-handoff.md). До установки обработчика не задавать `VITE_CONTACT_ENDPOINT`: посетителям доступны email и телефон. SMTP-пароли хранятся только в приватном env сервера.

Для проверки серверной части: `npm ci --prefix server --ignore-scripts`, затем `npm test --prefix server`. Тесты используют локальный SMTP-приёмник.

## Основные файлы

- `src/data/company.ts` — реквизиты, контакты и стоимость.
- `src/seo.ts` — маршруты, метаданные и разметка страниц.
- `src/components/DesignDirectionNav.tsx` — меню направлений с пунктом «Главная».
- `public/favicon.svg` — фирменный микрофон для вкладки браузера.
- [Фактура Lexicom](docs/LEXICOM_MASTER_FACTS.md), [кейсы](docs/cases/register.md), [задачи до запуска](docs/seo/launch-blockers.md).

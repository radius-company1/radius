# Формы, мобильная версия и интерфейс Lexicom

4 ноября 2026 года. Изменения внесены только в единственный источник `/Users/romaborovik/lexicom-final-experiment/2026-10-14/final`. Релиз на GitHub, сервер и DNS не выполнялись. Исходный опубликованный коммит: `8f28975f3f79b387cb34c7a0a3c505c09dfb5819`.

## Сделано

- Отдельный сервер заявок с получателем info@lexicom-ai.ru. Настройка SMTP хранится на сервере. В письме — контакт, задача, страница, продукт/направление, номер заявки и редакция согласия. В приватном журнале нет текста заявки, контакта или IP.
- Форма на 13 страницах: организация, имя, один контакт и необязательная задача; согласие, проверка полей, состояние отправки, сохранение введённого при ошибке. Защита от двойного нажатия и повторной отправки после потери ответа. При незаданном endpoint доступны email/телефон.
- Мобильная главная: выбор одного из четырёх продуктов, компактные видеокарточки, короткие отраслевые строки, раскрытие подробностей компании, внедрения и кейсов, FAQ. На десктопе описания компании/кейсов остаются обычным текстом. Основные факты и результаты кейсов всегда видны.
- МФЦ: подробности модулей, процесса RAG и преимуществ раскрываются на телефоне. Награда Кузбасса, 1 234 документа, год начала и результат сохранены.
- 320 px без горизонтального переполнения; управление вкладками с клавиатуры на МФЦ/122/ЕДДС/соцзащите/образовании; связь вкладки с панелью; исправлены роли трёх списков и контраст индексов/подписей.
- Ссылки меню ведут на адреса с завершающим `/`; декоративная стрелка больше не входит в доступное имя мобильной ссылки.

## Сокращение длины

Одинаковая ширина 390 px, шрифт загружен, раскрытия закрыты. Для сопоставимости новая длина измерена **с включённой формой**, до последнего переключения на прямые контакты.

| Страница | До | После | Сокращение |
| --- | ---: | ---: | ---: |
| Главная | 23 451 px | 15 937 px | 32% |
| МФЦ | 18 128 px | 16 148 px | 11% |

Текущий `dist/` собран без тестового адреса обработчика: до подключения специалистом показываются прямые контакты. Контент раскрытий остаётся в HTML; без JavaScript текст доступен.

## Проверки

- `npm run build` и `npm run build:launch` — успешно. Финальная сборка: launch без VITE_CONTACT_ENDPOINT. Сохраняется предупреждение Vite о размере общего JS-файла; это не ошибка сборки.
- `npm run verify:launch` — 17 страниц, уникальные метаданные/разметка, 16 перенаправлений со слешем, 17 index.html и 3 настоящих 404.
- `npm exec -- oxlint src scripts server vite.config.ts` — без ошибок и предупреждений после исправлений.
- 17 страниц × 4 ширины (320/390/768/1440): без переполнения, ошибок JavaScript, пропавших изображений и невидимых блоков. Изменённые после этого главная и МФЦ проверены повторно.
- Автоматическая проверка axe (WCAG A/AA): нарушений на 17 десктопных страницах не обнаружено; конечная главная проверена также на четырёх ширинах. Это автоматические проверки, дополнительно просмотрены изображения основных мобильных блоков.
- Все 17 страниц проверены без JavaScript. На главной видны все четыре продукта; FAQ раскрывается нативно.
- 7 серверных тестов: поля, согласие, получатель, CORS, размеры запросов, лимиты, отказы/неопределённый результат SMTP, последовательные и одновременные повторы; реальный Nodemailer отправляет в локальный SMTP-приёмник.
- Браузер → HTTP API → локальный SMTP: каждая из 13 форм прошла. Дополнительно проверены двойное нажатие, ошибка почты с повтором и потеря ответа уже принятой заявки. 16 сообщений поступили в локальный приёмник; внешних писем не отправлено.
- Клавиатура пяти отраслевых переключателей, мобильный/десктопный выбор продуктов, раскрытия, меню и конечный URL `/products/neurobot/` — прошли.

Доказательства: `docs/verification/forms-mobile-2026-11-04/`. Материалы предыдущего аудита сохранены отдельно; чужих параллельных изменений в проверенных исходниках не обнаружено.

## Передача и оставшиеся шаги

[Инструкция специалисту](contact-form-handoff.md): установка Node-сервиса, SMTP, прокси Apache без замены старого сайта, включение формы, приёмка и откат. Конфигурация проверяется на реальном сервере перед reload; сборка не отправляет письма самостоятельно.

После установки нужно подтвердить получение письма на **info@lexicom-ai.ru** и только затем включить endpoint в публикуемой сборке. Номер Лексы, реальные звонки, подключение аналитики/поисковых кабинетов и перенос основного домена этой работой не выполнялись.

Невыбранные в этом этапе пункты прежнего ревью остаются в [списке запуска](seo/launch-blockers.md): цена от 550 000 ₽ за весь проект, пустые кейсы отдельных отраслей и статус Белгородского ЕКЦ, карточки соцзащиты, инфраструктура переноса старых URL.

## Изменённые файлы

- `.env.example`
- `.gitignore`
- `docs/contact-form-handoff.md`
- `docs/seo/launch-blockers.md`
- `server/.env.example`
- `server/.gitignore`
- `server/contact.mjs`
- `server/contract.json`
- `server/deploy/apache-contact.conf`
- `server/deploy/lexicom-contact.service`
- `server/index.mjs`
- `server/package.json`
- `server/test/contact.test.mjs`
- `server/test/smtp-fixture.mjs`
- `src/components/About.tsx`
- `src/components/Cases.tsx`
- `src/components/ContactForm.tsx`
- `src/components/DemoSection.tsx`
- `src/components/DemoShowcase.tsx`
- `src/components/DesignProducts.tsx`
- `src/components/Directions.tsx`
- `src/components/Government.tsx`
- `src/components/Header.tsx`
- `src/components/Implementation.tsx`
- `src/components/edds/EddsAnalytics.tsx`
- `src/components/edds/EddsScenarios.tsx`
- `src/components/education/EducationSections.tsx`
- `src/components/mfc/MfcEcosystem.tsx`
- `src/components/mfc/MfcExperience.tsx`
- `src/components/mfc/MfcScenarios.tsx`
- `src/components/neurobot/NbFaqAndForm.tsx`
- `src/components/s122/S122Analytics.tsx`
- `src/components/s122/S122Scenarios.tsx`
- `src/components/social/SocialAnalytics.tsx`
- `src/components/social/SocialScenarios.tsx`
- `src/components/ui/FaqList.tsx`
- `src/components/ui/MobileDetails.tsx`
- `src/hooks/useScenarioTabs.ts`
- `src/hooks/useViewTransitionNavigate.ts`
- `src/index.css`
- `src/styles/base.css`
- `src/styles/compact.css`
- `src/styles/contact-form.css`
- `src/styles/design-experiment.css`
- `src/styles/final-experiment.css`
- `src/styles/neurobot.css`
- `src/styles/utilities.css`
- `server/package-lock.json`
- `docs/release-readiness-2026-11-04.md`
- `docs/verification/forms-mobile-2026-11-04/*` — результаты проверок.

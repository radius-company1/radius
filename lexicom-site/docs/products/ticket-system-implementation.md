# Управление обращениями — выполненная реализация

05.11.2026. Страница подготовлена и проверена; включена в [выпуск GitHub Pages 05.11.2026](../releases/2026-11-05-ticket-customers.md).

Локальный адрес: http://127.0.0.1:5286/products/ticket-system/.

## Страница и ссылки

Новая самостоятельная продуктовая страница `/products/ticket-system/`: назначение продукта, пять этапов работы с обращением, шесть экранов интерфейса, правила и сроки, база знаний и отчёты, кейс РЖД, варианты подключения, FAQ и существующий контактный блок сайта.

Продукт добавлен после контактного центра в меню, на главной, в каталоге для бизнеса и в подвале. Из кейса РЖД можно перейти к продукту, а со страницы продукта — к QR-обращениям в кейсе. Контекстные блоки добавлены на страницы контактного центра, ИИ-агента, ЕКЦ 110, ЖКХ и образования. Они описывают возможный состав решения; фактура существующих отраслевых внедрений сохранена.

На телефонах схема, подробные возможности и варианты подключения раскрываются по нажатию. Интерфейс показан через крупные фрагменты; по нажатию доступно полное изображение и просмотр в исходном размере. Управление вкладками работает с клавиатуры, после закрытия изображения фокус возвращается на кнопку открытия.

## Шесть обработанных экранов

Исходник — снимки из `Тикет.docx`. Редактирование выполнено встроенным `image_gen`, затем файлы сжаты в WebP через `cwebp` без изменения содержания. Общий размер шести файлов — 487 382 байта.

| Файл в `public/products/ticket-system/` | Подготовка |
|---|---|
| `queue.webp` | Убраны имена, названия организаций и обрезанные идентификаторы; сохранены исходные темы и статусы |
| `automation.webp` | Удалена строка с удалённым сотрудником; сохранены два работающих правила |
| `knowledge.webp` | Удалены внутренние статьи разработки; сохранены тематики и нейтральное состояние выбора раздела |
| `sla.webp` | Читаемая таблица настройки сроков QR-обращений: исходные 15 минут / 12 часов |
| `reports.webp` | Читаемый фрагмент отчётности; исходные показатели сохранены |
| `topics.webp` | Удалены внутренние темы разработки; оставлены исходные строки предметных тематик |

Лишние боковые панели и внутренний бренд Resolve убраны из кадров. Название продукта на сайте — «Управление обращениями». Числа отчётов не используются в текстах страницы как эффект внедрения. Сроки 15 минут / 12 часов описаны как настройки проекта РЖД.

[Полные промпты обработки](/Users/romaborovik/Desktop/lexicom_landing/artifacts/lexicom-ticket-product-2026-11-05/image-prompts.json) и [состав файлов с размерами](/Users/romaborovik/Desktop/lexicom_landing/artifacts/lexicom-ticket-product-2026-11-05/assets.json).

## Поисковая подготовка

Маршрут зарегистрирован в `App.tsx` и `seo.ts`. У страницы свои title, description, canonical и Open Graph; полный текст включён в заранее сформированный HTML. Для конечного домена страница входит в sitemap. Для GitHub Pages сохранены noindex и пустой sitemap.

В семантическое ядро добавлен отдельный кластер C25 «Управление обращениями»: 20 фраз, всего 288 фраз в 25 кластерах. CSV и JSON совпадают; частотность не заполнялась. Обновлены карта страниц и ключевых запросов.

## Проверки

- `npm run build` — сборка для GitHub Pages успешна; проверены префикс `/radius/lexicom/`, пути к изображениям, canonical, noindex и пустой sitemap.
- `npm run build:launch` и `npm run verify:launch` — 18 HTML-страниц и 404, уникальные метаданные, ресурсы, правила адресов, sitemap и robots. Финальный `dist/` оставлен в режиме локального просмотра основного домена.
- Браузер: ширины 320, 390, 768 и 1440 px; прямой адрес, пять этапов, шесть вкладок и изображений, увеличение, Escape, возврат фокуса, клавиатура, контактная ссылка, продукт на главной, взаимные переходы с РЖД и пять контекстных ссылок. Ошибок JavaScript, ответов 400+ и горизонтального переполнения нет.
- Без JavaScript видны основной текст, все пять этапов и шесть изображений.
- axe, правила WCAG 2 A/AA и 2.1 AA: нарушений на новой странице не найдено при 390 и 1440 px. Мобильное и обычное меню проверены отдельно.
- Визуально проверены первый экран, мобильные карточки, просмотр изображений и итоговые обработанные экраны.
- Полная проверка исходников oxlint: ошибок нет; 17 существовавших предупреждений в остальных компонентах.

[Результаты браузерных проверок](/Users/romaborovik/Desktop/lexicom_landing/artifacts/lexicom-ticket-product-2026-11-05/browser-checks.json), [доступность](/Users/romaborovik/Desktop/lexicom_landing/artifacts/lexicom-ticket-product-2026-11-05/accessibility.json).

## Дальнейшие действия

Локальная реализация завершена. Владелец одобрил публикацию всех изменений; выпуск подготовлен через `projects/tula`. Основной домен не переключается.

Для расширения коммерческого описания у команды остаются: состав отдельной поставки и лицензирования, требования к размещению, точные операции обмена с ИИ-агентом и контактным центром, правила пауз и эскалации, матрица ролей. Текущая страница описывает возможности из переданного документа и уточнений владельца.

Контактный блок использует существующую настройку сайта: при неподключённом серверном обработчике открывает письмо на `info@lexicom-ai.ru`. Реальная серверная доставка заявок остаётся отдельной задачей специалиста по подготовленному ранее плану.

## Файлы

- `src/data/ticketSystemPage.ts`
- `src/pages/TicketSystemPage.tsx`
- `src/styles/ticket-system.css`
- `src/components/TicketProductReference.tsx`
- `src/styles/ticket-reference.css`
- `src/data/products.ts`
- `src/data/navigation.ts`
- `src/data/footer.ts`
- `src/App.tsx`
- `src/seo.ts`
- `src/data/productDemos.ts`
- `src/components/Products.tsx`
- `src/components/ProductVisual.tsx`
- `src/components/DesignProducts.tsx`
- `src/data/directions/business.ts`
- `src/components/business/BusinessSections.tsx`
- `src/components/business/RzdCase.tsx`
- `src/pages/ContactCenterPage.tsx`
- `src/pages/NeurobotPage.tsx`
- `src/pages/EkcPage.tsx`
- `src/pages/UtilitiesPage.tsx`
- `src/pages/EducationPage.tsx`
- `src/components/DemoShowcase.tsx`
- `public/products/ticket-system/automation.webp`
- `public/products/ticket-system/knowledge.webp`
- `public/products/ticket-system/queue.webp`
- `public/products/ticket-system/reports.webp`
- `public/products/ticket-system/sla.webp`
- `public/products/ticket-system/topics.webp`
- `docs/products/ticket-system-plan.md`
- `docs/products/ticket-system-implementation.md`
- `docs/LEXICOM_MASTER_FACTS.md`
- `docs/cases/rzd.md`
- `docs/seo/keyword-map.md`
- `docs/seo/research-2026-10-29/semantic-core.json`
- `docs/seo/research-2026-10-29/semantic-core.csv`
- `docs/seo/research-2026-10-29/page-map.md`
- `docs/seo/research-2026-10-29/clusters.md`
- `docs/seo/research-2026-10-29/README.md`

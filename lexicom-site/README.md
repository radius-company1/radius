# Lexicom — новый корпоративный сайт (шаблон v1)

Интерактивный шаблон главной страницы в стиле **Liquid Intelligence**: жидкое стекло, цветовые слои, переключение режимов направлений.

## Запуск

```bash
cd projects/lexicom-site
npm install
npm run dev
```

Откройте URL из терминала (обычно http://localhost:5173).

**Важно:** сайт живёт в `projects/lexicom-site`, не в корневом `index.html` и не в `projects/lexicom/`.

### Если видите старую версию (схема, стили)

Vite может отдавать закэшированные модули. Остановите dev-сервер (`Ctrl+C`) и запустите:

```bash
npm run dev:clean
```

Затем в браузере: **Cmd+Shift+R** (жёсткое обновление).

## Сборка

```bash
npm run build
npm run preview
```

## Структура

- `src/data/` — тексты и данные блоков
- `src/components/` — секции, `GlassSurface`, `DirectionSwitcher`, `HeroVisualization`
- `src/theme/` — темы направлений (CSS-переменные)
- `src/hooks/` — View Transition API, параллакс
- `src/pages/` — главная и заглушки `/mfc`, `/122`, `/edds`

## Маршруты

| URL | Режим |
|-----|--------|
| `/` | Обзор |
| `/mfc` | МФЦ (заглушка) |
| `/122` | Служба 122 (заглушка) |
| `/edds` | ЕДДС (заглушка) |

Переключение направлений меняет цветовую тему фона и использует View Transition API (с fallback).

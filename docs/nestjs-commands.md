# NestJS — команди

## Запуск застосунку

```bash
npm run start:dev
```
Запускає застосунок у watch-режимі — сервер сам перезапускається при зміні файлів. Основна команда для розробки.

```bash
npm run start:debug
```
Те саме, що `start:dev`, але з увімкненим debugger (`--debug`) — можна підключитись через Chrome DevTools / VS Code debugger.

```bash
npm run build
```
Компілює TypeScript у `dist/` (production-збірка).

```bash
npm run start:prod
```
Запускає вже зібраний застосунок з `dist/main.js` (після `build`).

## Тести

```bash
npm run test
```
Прогонити всі unit-тести один раз.

```bash
npm run test:watch
```
Прогонити тести у watch-режимі — перезапускаються при зміні файлів.

```bash
npm run test:cov
```
Прогонити тести з підрахунком покриття коду (coverage).

```bash
npm run test:e2e
```
Прогонити end-to-end тести (окремий конфіг `vitest.config.e2e.ts`).

## Лінтинг і форматування

```bash
npm run lint
```
Перевірити код лінтером (`oxlint`) у `src/` та `test/`.

```bash
npm run format
```
Автоматично відформатувати код через Prettier.

## Nest CLI — генерація коду

Ці команди створюють файли за стандартним шаблоном Nest і одразу підключають їх у найближчий `*.module.ts`.

```bash
npx nest generate module <name>
# скорочено: npx nest g mo <name>
```
Створює новий модуль (`<name>.module.ts`).

```bash
npx nest generate controller <name>
# скорочено: npx nest g co <name>
```
Створює контролер (`<name>.controller.ts`) — обробляє HTTP-запити.

```bash
npx nest generate service <name>
# скорочено: npx nest g s <name>
```
Створює сервіс (`<name>.service.ts`) — бізнес-логіка.

```bash
npx nest generate resource <name>
# скорочено: npx nest g res <name>
```
Створює одразу все: модуль + контролер + сервіс + DTO-заглушки + CRUD-методи. Питає, чи потрібен REST API, GraphQL тощо. Найшвидший спосіб почати новий модуль (наприклад, майбутній `companies`).

> Приклад: `npx nest g res modules/companies` створить повний CRUD-модуль `companies` одразу у папці `src/modules/`.

## Корисні прапорці

```bash
npx nest generate <schematic> <name> --no-spec
```
Не створювати файл тестів (`.spec.ts`) поруч — корисно, якщо тести пишете окремо або пізніше.

```bash
npx nest generate <schematic> <name> --dry-run
```
Показати, які файли будуть створені/змінені, без реального запису — зручно перевірити перед виконанням.

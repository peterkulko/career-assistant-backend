# Career Assistant Backend

> **Work in progress** — under active development, API and schema may change.

REST API for tracking job applications — company, position, status, and application history.

## Stack

- [NestJS](https://nestjs.com) 12 (Express platform)
- TypeScript, ESM
- [Prisma ORM](https://www.prisma.io) 7 with `@prisma/adapter-pg` (PostgreSQL)
- `class-validator` / `class-transformer` for request validation
- Vitest for unit and e2e tests
- oxlint for linting

## Prerequisites

- Node.js 22+
- A running PostgreSQL instance (see [Database](#database) for a Docker-based setup)

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure environment variables — create a `.env` file in the project root:

   ```bash
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/career_assistant?schema=public"
   PORT=4000
   ```

3. Start PostgreSQL and apply database migrations:

   ```bash
   docker compose up -d
   npx prisma migrate dev
   ```

4. Run the app:

   ```bash
   # development (watch mode)
   npm run start:dev

   # production
   npm run build
   npm run start:prod
   ```

The API is served under the `/api` prefix, e.g. `http://localhost:4000/api/job-applications`.

## Database

PostgreSQL runs locally via Docker Compose:

```bash
docker compose up -d      # start Postgres (localhost:5432, db: career_assistant)
docker compose down       # stop it (add -v to also wipe the data volume)
```

To browse/edit data, use Prisma Studio instead of a separate GUI client:

```bash
npx prisma studio
```

## Testing

```bash
# unit tests
npm run test

# unit tests, watch mode
npm run test:watch

# e2e tests
npm run test:e2e

# coverage
npm run test:cov
```

## Linting & formatting

```bash
npm run lint
npm run format
```

## API

### Job Applications (`/api/job-applications`)

| Method | Path  | Description                |
| ------ | ----- | --------------------------- |
| GET    | `/`   | List all job applications   |
| GET    | `/:id` | Get a job application by ID |
| POST   | `/`   | Create a job application    |
| PATCH  | `/:id` | Update a job application    |
| DELETE | `/:id` | Delete a job application    |

**Create/update payload** (`CreateJobApplicationDto` / partial for updates):

| Field       | Type     | Required | Notes                          |
| ----------- | -------- | -------- | ------------------------------- |
| `company`   | string   | yes      | 2–100 characters                |
| `position`  | string   | yes      | 10–100 characters               |
| `status`    | string   | yes      | 5–50 characters                 |
| `appliedAt` | ISO date | yes      | Date the application was sent   |
| `url`       | string   | no       | Must be a valid URL             |
| `notes`     | string   | no       | Up to 500 characters            |

## Data schema

Defined in `prisma/models/job-application.prisma`, table `job_applications`:

| Column       | Type      | Notes                              |
| ------------ | --------- | ----------------------------------- |
| `id`         | `String`  | UUID, primary key                   |
| `company`    | `String`  |                                      |
| `position`   | `String`  |                                      |
| `status`     | `String`  |                                      |
| `applied_at` | `DateTime`|                                      |
| `url`        | `String?` | optional                            |
| `notes`      | `String?` | optional                            |
| `created_at` | `DateTime`| defaults to the current timestamp   |

## Project structure

```
prisma/
  schema.prisma            # generator + datasource config
  models/                  # Prisma model definitions
  migrations/              # SQL migrations
src/
  main.ts                  # app bootstrap
  app.module.ts             # root module
  prisma/                  # global Prisma module/service
  modules/
    job-applications/       # controller, service, DTOs
  generated/prisma/         # generated Prisma client (do not edit)
```

.PHONY: dev db-up db-down db-reset migrate studio install build test lint

dev: db-up migrate ## Start Postgres and the app in watch mode
	npm run start:dev

db-up: ## Start Postgres in Docker and wait until it's ready
	docker compose up -d --wait

db-down: ## Stop Postgres
	docker compose down

db-reset: ## Stop Postgres and wipe its data volume
	docker compose down -v

migrate: ## Apply pending Prisma migrations
	npx prisma migrate dev

studio: ## Open Prisma Studio to browse/edit data
	npx prisma studio

install: ## Install dependencies
	npm install

build: ## Build for production
	npm run build

test: ## Run unit tests
	npm run test

lint: ## Run the linter
	npm run lint

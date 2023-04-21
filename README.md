## Medium-Clone-Backend-API | NestJS-Prisma

A simple backend REST API for medium type application using NestJs, Prisma, PostgreSQL and Swagger.

### Installation
1. Install dependencies: `npm i`.
2. If you have docker installed follow the step a or step b if you have a local instance of PostgreSQL:
  a. Start a PostgreSQL database with docker using: `docker-compose up -d`.
  b. Change the `DATABASE_URL` inside the `.env` file with a valid [PostgreSQL connection string].
3. Apply database migrations: `npx prisma migrate dev`
4. Start the project: `npm run start:dev`
5. Access the project at http://localhost:3000/api

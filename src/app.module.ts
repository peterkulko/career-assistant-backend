import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { JobApplicationsModule } from './modules/job-applications/job-applications.module.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { LoggerMiddleware } from './common/middlewares/logger.middleware.js';

@Module({
  imports: [PrismaModule, JobApplicationsModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}

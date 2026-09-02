import { Module } from '@nestjs/common';
import { JobApplicationsModule } from './modules/job-applications/job-applications.module.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [PrismaModule, JobApplicationsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

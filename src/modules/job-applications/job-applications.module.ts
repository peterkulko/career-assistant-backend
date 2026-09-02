import { Module } from '@nestjs/common';
import { JobApplicationsService } from './job-applications.service.js';
import { JobApplicationsController } from './job-applications.controller.js';

@Module({
  controllers: [JobApplicationsController],
  providers: [JobApplicationsService],
})
export class JobApplicationsModule {}

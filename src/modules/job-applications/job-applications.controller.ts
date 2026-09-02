import { Controller, Get } from '@nestjs/common';
import { JobApplicationsService } from './job-applications.service.js';

@Controller('job-applications')
export class JobApplicationsController {
  constructor(private readonly jobApplicationsService: JobApplicationsService) {}

  @Get()
  findAll() {
    return this.jobApplicationsService.findAll();
  }
}

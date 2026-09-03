import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { JobApplicationsService } from './job-applications.service.js';
import { CreateJobApplicationDto } from './dto/job-applications.dto.js';

@Controller('job-applications')
export class JobApplicationsController {
  constructor(private readonly jobApplicationsService: JobApplicationsService) {}

  @Get()
  findAll() {
    return this.jobApplicationsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.jobApplicationsService.findById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() jobApplicationData: CreateJobApplicationDto) {
    return this.jobApplicationsService.create(jobApplicationData);
  }
}

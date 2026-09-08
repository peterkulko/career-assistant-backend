import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { JobApplicationsService } from './job-applications.service.js';
import { CreateJobApplicationDto, UpdateJobApplicationDto } from './dto/job-applications.dto.js';

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
  create(@Body() jobApplicationData: CreateJobApplicationDto) {
    return this.jobApplicationsService.create(jobApplicationData);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() jobApplicationData: UpdateJobApplicationDto) {
    return this.jobApplicationsService.update(id, jobApplicationData);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.jobApplicationsService.delete(id);
  }
}

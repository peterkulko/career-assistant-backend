import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { JobApplicationsService } from './job-applications.service.js';
import { CreateJobApplicationDto, UpdateJobApplicationDto } from './dto/job-applications.dto.js';
import { JobApplicationEntity } from './entities/job-application.entity.js';
import { ErrorResponseEntity } from '../../common/dto/error-response.entity.js';

@ApiTags('Job Applications')
@Controller('job-applications')
export class JobApplicationsController {
  constructor(private readonly jobApplicationsService: JobApplicationsService) {}

  @ApiOperation({
    summary: 'Get all job applications',
    description: 'Retrieve a list of all job applications in the system.',
  })
  @ApiOkResponse({
    description: 'List of job applications retrieved successfully.',
    type: JobApplicationEntity,
    isArray: true,
  })
  @Get()
  findAll() {
    return this.jobApplicationsService.findAll();
  }

  @ApiOperation({
    summary: 'Get a job application by ID',
    description: 'Retrieve a specific job application by its unique identifier.',
  })
  @ApiParam({ name: 'id', format: 'uuid', description: 'Job application ID' })
  @ApiOkResponse({ description: 'Job application found.', type: JobApplicationEntity })
  @ApiNotFoundResponse({ description: 'Job application not found.', type: ErrorResponseEntity })
  @ApiBadRequestResponse({ description: 'Invalid UUID format.', type: ErrorResponseEntity })
  @Get(':id')
  findById(@Param('id', ParseUUIDPipe) id: string) {
    return this.jobApplicationsService.findById(id);
  }

  @ApiOperation({
    summary: 'Create a new job application',
    description: 'Add a new job application to the system.',
  })
  @ApiCreatedResponse({ description: 'Job application created successfully.', type: JobApplicationEntity })
  @ApiBadRequestResponse({ description: 'Validation failed.', type: ErrorResponseEntity })
  @Post()
  create(@Body() jobApplicationData: CreateJobApplicationDto) {
    return this.jobApplicationsService.create(jobApplicationData);
  }

  @ApiOperation({
    summary: 'Update a job application',
    description: 'Update the details of an existing job application.',
  })
  @ApiParam({ name: 'id', format: 'uuid', description: 'Job application ID' })
  @ApiOkResponse({ description: 'Job application updated successfully.', type: JobApplicationEntity })
  @ApiNotFoundResponse({ description: 'Job application not found.', type: ErrorResponseEntity })
  @ApiBadRequestResponse({ description: 'Validation failed.', type: ErrorResponseEntity })
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() jobApplicationData: UpdateJobApplicationDto) {
    return this.jobApplicationsService.update(id, jobApplicationData);
  }

  @ApiOperation({
    summary: 'Delete a job application',
    description: 'Remove a job application from the system by its unique identifier.',
  })
  @ApiParam({ name: 'id', format: 'uuid', description: 'Job application ID' })
  @ApiOkResponse({ description: 'Job application deleted successfully.', type: JobApplicationEntity })
  @ApiNotFoundResponse({ description: 'Job application not found.', type: ErrorResponseEntity })
  @ApiBadRequestResponse({ description: 'Invalid UUID format.', type: ErrorResponseEntity })
  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.jobApplicationsService.delete(id);
  }
}

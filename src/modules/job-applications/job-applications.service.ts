import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import type { JobApplication } from '../../generated/prisma/client.js';
import { CreateJobApplicationDto } from './dto/job-applications.dto.js';

@Injectable()
export class JobApplicationsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<JobApplication[]> {
    return this.prisma.jobApplication.findMany();
  }

  async findById(id: string): Promise<JobApplication> {
    const jobApplication = await this.prisma.jobApplication.findUnique({
      where: { id },
    });

    if (!jobApplication) {
      throw new NotFoundException(`Job application with ID ${id} not found`);
    }

    return jobApplication;
  }

  create(jobApplicationData: CreateJobApplicationDto): Promise<JobApplication> {
    return this.prisma.jobApplication.create({
      data: jobApplicationData,
    });
  }
}

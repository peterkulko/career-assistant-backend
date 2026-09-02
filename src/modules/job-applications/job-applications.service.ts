import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service.js';
import type { JobApplication } from '../../generated/prisma/client.js';

@Injectable()
export class JobApplicationsService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<JobApplication[]> {
    return this.prisma.jobApplication.findMany();
  }
}

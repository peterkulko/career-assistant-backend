import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class JobApplicationEntity {
  @ApiProperty({ example: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890', description: 'Unique identifier' })
  id: string;

  @ApiProperty({ example: 'Google', description: 'Company name' })
  company: string;

  @ApiProperty({ example: 'Backend Engineer', description: 'Position title' })
  position: string;

  @ApiProperty({ example: 'APPLIED', description: 'Current status of the application' })
  status: string;

  @ApiProperty({ example: '2026-01-15T00:00:00.000Z', description: 'Date the application was submitted' })
  appliedAt: Date;

  @ApiPropertyOptional({ example: 'https://jobs.example.com/123', description: 'Link to the job posting' })
  url?: string | null;

  @ApiPropertyOptional({ example: 'Referred by a friend', description: 'Additional notes' })
  notes?: string | null;

  @ApiProperty({ example: '2026-01-15T10:00:00.000Z', description: 'Timestamp when the record was created' })
  createdAt: Date;
}

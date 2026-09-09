import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseEntity {
  @ApiProperty({ example: 404, description: 'HTTP status code' })
  status: number;

  @ApiProperty({ example: 'Job application with ID ... not found', description: 'Error message' })
  message: string;

  @ApiProperty({ example: '2026-09-09T12:34:56.789Z', description: 'Time the error occurred' })
  timestamp: string;

  @ApiProperty({ example: '/api/job-applications/abc', description: 'Request path that caused the error' })
  path: string;
}

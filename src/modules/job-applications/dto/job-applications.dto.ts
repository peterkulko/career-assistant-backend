import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, IsNotEmpty, MaxLength, Length, IsUrl } from 'class-validator';

export class CreateJobApplicationDto {
  @ApiProperty({ example: 'Google', minLength: 2, maxLength: 100, description: 'Company name' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  company: string;

  @ApiProperty({ example: 'Backend Engineer', minLength: 2, maxLength: 100, description: 'Position title' })
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  position: string;

  @ApiProperty({ example: 'APPLIED', minLength: 5, maxLength: 50, description: 'Current status of the application' })
  @IsString()
  @IsNotEmpty()
  @Length(5, 50)
  status: string;

  @ApiProperty({ example: '2026-01-15', description: 'Date the application was submitted (ISO 8601)' })
  @IsDateString()
  @IsNotEmpty()
  appliedAt: string;

  @ApiPropertyOptional({ example: 'https://jobs.example.com/123', description: 'Link to the job posting' })
  @IsOptional()
  @IsUrl()
  @IsNotEmpty()
  url?: string;

  @ApiPropertyOptional({ example: 'Referred by a friend', maxLength: 500, description: 'Additional notes' })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  notes?: string;
}

export class UpdateJobApplicationDto extends PartialType(CreateJobApplicationDto) {}

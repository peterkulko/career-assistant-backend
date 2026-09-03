import { IsString, IsOptional, IsDateString } from 'class-validator';

export class CreateJobApplicationDto {
  @IsString()
  company: string;

  @IsString()
  position: string;

  @IsString()
  status: string;

  @IsDateString()
  appliedAt: string;

  @IsOptional()
  @IsString()
  url?: string;

  @IsOptional()
  @IsString()
  notes?: string;
}
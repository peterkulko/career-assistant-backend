import { PartialType } from '@nestjs/mapped-types';
import { IsString, IsOptional, IsDateString, IsNotEmpty, MaxLength, Length, IsUrl } from 'class-validator';

export class CreateJobApplicationDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 100)
  company: string;

  @IsString()
  @IsNotEmpty()
  @Length(10, 100)
  position: string;

  @IsString()
  @IsNotEmpty()
  @Length(5, 50)
  status: string;

  @IsDateString()
  @IsNotEmpty()
  @Length(10, 100)
  appliedAt: string;

  @IsOptional()
  @IsUrl()
  @IsNotEmpty()
  url?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MaxLength(500)
  notes?: string;
}

export class UpdateJobApplicationDto extends PartialType(CreateJobApplicationDto) {}

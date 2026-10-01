import { Module } from '@nestjs/common';
import { CompanyService } from './company.service.js';
import { CompanyController } from './company.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from './entities/company.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Company])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}

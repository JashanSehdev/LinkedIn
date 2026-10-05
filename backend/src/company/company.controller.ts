import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Query } from '@nestjs/common';
import { CompanyService } from './company.service.js';
import { CreateCompanyDto } from './dto/create-company.dto.js';
import { UpdateCompanyDto } from './dto/update-company.dto.js';
import type { Request } from 'express';
import { FilterDto } from './dto/filter.dto.js';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto, @Req() req : Request & {user : any}) {
    return this.companyService.create(createCompanyDto, req.user.id);
  }

  @Get()
    findAll(@Query() query : FilterDto, @Req() req : Request & {user : any} ) {
    return this.companyService.findAll(query, req.user.id);
  }
  @Get('user')
    getUserCompany( @Req() req : Request & {user : any} ){
      return this.companyService.getUserCompany(req.user.id)
    }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(+id, updateCompanyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyService.remove(+id);
  }
}

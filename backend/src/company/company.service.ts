import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto.js';
import { UpdateCompanyDto } from './dto/update-company.dto.js';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity.js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository : Repository<Company>
  ){}
  async create(createCompanyDto: CreateCompanyDto, userId : number) {
    const company = this.companyRepository.create({...createCompanyDto, userId})

    return await this.companyRepository.save(company)
  }

  async findAll() {
    return await this.companyRepository.find({
      relations:{
        jobs:true
      }
    })
  }

  async findOne(id: number) {
    return await this.companyRepository.findOneByOrFail({id})
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    let company = await this.findOne(id)

    company = {...updateCompanyDto, ...company}
    return await this.companyRepository.update(id, company)
  }

  async remove(id: number) {
    const company = await this.findOne(id)
    return await this.companyRepository.remove(company)
  }
}

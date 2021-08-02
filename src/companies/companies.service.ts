import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CoreService } from 'src/core/core.service';
import { CompanyModel, CompanyStatus } from './company.model';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
    constructor(
    @InjectModel(CompanyModel) private readonly companyModel: typeof CompanyModel,
    private readonly coreService: CoreService,
  ) {}

  async getAll(): Promise<CompanyModel[]> {
    const coreCompanies = await this.coreService.getCompanies();
    const companies = await this.companyModel.findAll();
    return coreCompanies.map((company) => {
      const com = companies.find((c) => c.id === company.id);
      if (com) {
        return { ...company, status: com.status } as CompanyModel;
      } else {
        return { ...company, status: CompanyStatus.None } as CompanyModel;
      }
    });
  }

  async getCompanyById(id: number): Promise<CompanyModel> {
    return this.companyModel.findByPk(id);
  }

  async createCompany(dto: UpdateCompanyDto): Promise<CompanyModel> {
    return this.companyModel.create(dto);
  }

  async updateStatus(id: number, status: CompanyStatus): Promise<CompanyModel> {
    const company = await this.companyModel.findByPk(id);
    company.status = status;
    return company.save();
  }
}

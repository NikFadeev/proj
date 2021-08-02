import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyModel } from './company.model';
import { AccountsService } from 'src/accounts/accounts.service';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService,
    private readonly accountsService: AccountsService) { }

  @Get()
  async getAll(): Promise<CompanyModel[]> {
    return this.companiesService.getAll();
  }

  @Patch(':id')
  async updateStatus(@Param('id') id: string, @Body() dto: UpdateCompanyDto) {
    let company = await this.companiesService.getCompanyById(+id);
    if (company) {
      company = await this.companiesService.updateStatus(+id, dto.status);
    } else {
      company = await this.companiesService.createCompany(dto);
      await this.accountsService.createAccount({ companyId: +id, email: null });
    }
    return { resultCode: 0, messages: [], data: company };
  }
}

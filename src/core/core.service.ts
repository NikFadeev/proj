import { HttpService, Injectable } from '@nestjs/common';
import { CoreCompanyDto } from '../companies/dto/core-company.dto';

@Injectable()
export class CoreService {
  constructor(private readonly httpService: HttpService) { }

  async getCompanies(): Promise<CoreCompanyDto[]> {
    return this.httpService.axiosRef
      .get<{ items: CoreCompanyDto[] }>('friends/companies')
      .then((r) => r.data.items);
  }
}

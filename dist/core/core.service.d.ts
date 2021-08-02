import { HttpService } from '@nestjs/common';
import { CoreCompanyDto } from '../companies/dto/core-company.dto';
export declare class CoreService {
    private readonly httpService;
    constructor(httpService: HttpService);
    getCompanies(): Promise<CoreCompanyDto[]>;
}

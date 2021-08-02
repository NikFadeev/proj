import { CompaniesService } from './companies.service';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { CompanyModel } from './company.model';
import { AccountsService } from 'src/accounts/accounts.service';
export declare class CompaniesController {
    private readonly companiesService;
    private readonly accountsService;
    constructor(companiesService: CompaniesService, accountsService: AccountsService);
    getAll(): Promise<CompanyModel[]>;
    updateStatus(id: string, dto: UpdateCompanyDto): Promise<{
        resultCode: number;
        messages: any[];
        data: CompanyModel;
    }>;
}

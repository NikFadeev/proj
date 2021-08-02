import { CoreService } from 'src/core/core.service';
import { CompanyModel, CompanyStatus } from './company.model';
import { UpdateCompanyDto } from './dto/update-company.dto';
export declare class CompaniesService {
    private readonly companyModel;
    private readonly coreService;
    constructor(companyModel: typeof CompanyModel, coreService: CoreService);
    getAll(): Promise<CompanyModel[]>;
    getCompanyById(id: number): Promise<CompanyModel>;
    createCompany(dto: UpdateCompanyDto): Promise<CompanyModel>;
    updateStatus(id: number, status: CompanyStatus): Promise<CompanyModel>;
}

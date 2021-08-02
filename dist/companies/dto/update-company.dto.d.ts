import { CompanyStatus } from "../company.model";
import { CoreCompanyDto } from "./core-company.dto";
export declare class UpdateCompanyDto extends CoreCompanyDto {
    status: CompanyStatus;
}

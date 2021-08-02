import { CompanyStatus } from "../company.model";
import { CoreCompanyDto } from "./core-company.dto";

export class UpdateCompanyDto extends CoreCompanyDto {
  status: CompanyStatus;
}
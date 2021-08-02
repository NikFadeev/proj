import { Model } from "sequelize-typescript";
export declare enum CompanyStatus {
    None = "None",
    BadCompany = "BadCompany",
    Active = "Active",
    Paused = "Paused",
    Destroyed = "Destroyed"
}
export declare class CompanyModel extends Model {
    id: number;
    title: string;
    status: CompanyStatus;
}

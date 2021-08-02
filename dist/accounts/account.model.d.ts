import { Model } from "sequelize-typescript";
export declare class AccountModel extends Model {
    companyId: number;
    email: string;
    passwordHash: string;
    passwordSalt: string;
}

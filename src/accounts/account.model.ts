import { Table, Model, Column } from "sequelize-typescript";

@Table
export class AccountModel extends Model {
  @Column
  companyId: number;
  @Column
  email: string;
  @Column
  passwordHash: string;
  @Column
  passwordSalt: string;
}

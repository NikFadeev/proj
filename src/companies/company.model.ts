import { Column, Model, Table } from "sequelize-typescript";

export enum CompanyStatus {
  None = 'None',
  BadCompany = 'BadCompany',
  Active = 'Active',
  Paused = 'Paused',
  Destroyed = 'Destroyed'
}

@Table
export class CompanyModel extends Model {
  @Column({ primaryKey: true })
  id: number;
  @Column
  title: string;
  @Column
  status: CompanyStatus
}

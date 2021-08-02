import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AccountsModule } from 'src/accounts/accounts.module';
import { CoreModule } from 'src/core/core.module';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { CompanyModel } from './company.model';

@Module({
  imports: [SequelizeModule.forFeature([CompanyModel]), CoreModule, AccountsModule],
  controllers: [CompaniesController],
  providers: [CompaniesService]
})
export class CompaniesModule { }

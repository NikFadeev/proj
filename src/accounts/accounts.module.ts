import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CoreModule } from 'src/core/core.module';
import { MailModule } from 'src/mail/mail.module';
import { AccountModel } from './account.model';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';

@Module({
  imports: [SequelizeModule.forFeature([AccountModel]), CoreModule, MailModule],
  controllers: [AccountsController],
  providers: [AccountsService],
  exports: [AccountsService]
})
export class AccountsModule {}

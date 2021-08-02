import { Controller, Body, Put, Post, Get, Patch, Param } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountModel } from './account.model';
import { AccountDto } from './dto/accountDto.dto';
import MailService from 'src/mail/mail.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService,
    private readonly mailService: MailService) { }

  // @Post()
  // async create(@Body() dto: Omit<AccountDto, 'email'>) {
  //   return this.accountsService.createAccount(dto);
  // }

  @Patch('/updateEmail/:id')
  async updateEmail(@Param('id') id: number, @Body() dto: Omit<AccountDto, 'companyId'>) {
    return this.accountsService.updateEmail(id, dto.email);
  }

  @Post('/generatePassword/:id')
  async generatePassword(@Param('id') id: number) {
    const pass = await this.accountsService.generatePassword(id);
    const account = await this.accountsService.getAccountById(id);
    if (account.email) {
      this.mailService.sendEmail(account.email, pass);
    }
  }

  @Get(':id')
  async findAccount(@Param('id') id: number) {
    return this.accountsService.getAccountById(id);
  }
}
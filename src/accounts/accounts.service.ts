import { Injectable } from '@nestjs/common';
import { AccountModel } from './account.model';
import { InjectModel } from '@nestjs/sequelize'
import { AccountDto } from './dto/accountDto.dto';
import { v1 } from 'uuid';
import { genSalt, hashSync } from 'bcrypt';

@Injectable()
export class AccountsService {
    constructor(@InjectModel(AccountModel) private readonly accountModel: typeof AccountModel) {}

  async createAccount(dto: AccountDto) {
    const account = await this.accountModel.create(dto);
    return Promise.resolve({ id: account.id, companyId: account.companyId, email: account.email });
  }

  async updateEmail(id: number, email: string) {
    const account = await this.accountModel.findByPk(id);
    account.email = email;
    return account.save();
  }

  async generatePassword(id: number) {
    const account = await this.accountModel.findByPk(id);
    const password = v1();
    const salt = await genSalt(10);
    account.passwordSalt = salt;
    account.passwordHash = hashSync(password, salt);
    await account.save();
    return password;
  }

  async getAccountById(id: number) {
    return this.accountModel.findByPk(id);
  }

  async getAccountByEmail(email: string): Promise<AccountModel> {
    return this.accountModel.findOne({
      where: {
        email
      }
    })
  }
}

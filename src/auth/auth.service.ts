import { Injectable } from '@nestjs/common';
import { AccountModel } from 'src/accounts/account.model';
import { AccountsService } from 'src/accounts/accounts.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private accountsService: AccountsService,
  private jwtService: JwtService) { }

  async validateAccount(email: string, pass: string): Promise<any> {
    const account: AccountModel = await this.accountsService.getAccountByEmail(email);
    console.log('validate account');
    console.log('email ' + email);
    console.log('password ' + pass);

    if (account) {
      const hash = account.passwordHash;
      const isMatch = await bcrypt.compare(pass, hash);
      if (isMatch) {
        console.log('compare true')
        return account;
      } else {
        console.log('compare false');
        return null;
      }
    }

    return null;
  }

  async login(account: any) {
    const payload = { email: account.email, sub: account.id };
    return {
      access_token: this.jwtService.sign(payload)
    }
  }
}
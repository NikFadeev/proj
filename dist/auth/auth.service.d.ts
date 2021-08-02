import { AccountsService } from 'src/accounts/accounts.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private accountsService;
    private jwtService;
    constructor(accountsService: AccountsService, jwtService: JwtService);
    validateAccount(email: string, pass: string): Promise<any>;
    login(account: any): Promise<{
        access_token: string;
    }>;
}

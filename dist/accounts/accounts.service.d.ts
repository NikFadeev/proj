import { AccountModel } from './account.model';
import { AccountDto } from './dto/accountDto.dto';
export declare class AccountsService {
    private readonly accountModel;
    constructor(accountModel: typeof AccountModel);
    createAccount(dto: AccountDto): Promise<{
        id: any;
        companyId: number;
        email: string;
    }>;
    updateEmail(id: number, email: string): Promise<AccountModel>;
    generatePassword(id: number): Promise<string>;
    getAccountById(id: number): Promise<AccountModel>;
    getAccountByEmail(email: string): Promise<AccountModel>;
}

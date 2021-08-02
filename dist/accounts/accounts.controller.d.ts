import { AccountsService } from './accounts.service';
import { AccountModel } from './account.model';
import { AccountDto } from './dto/accountDto.dto';
import MailService from 'src/mail/mail.service';
export declare class AccountsController {
    private readonly accountsService;
    private readonly mailService;
    constructor(accountsService: AccountsService, mailService: MailService);
    updateEmail(id: number, dto: Omit<AccountDto, 'companyId'>): Promise<AccountModel>;
    generatePassword(id: number): Promise<void>;
    findAccount(id: number): Promise<AccountModel>;
}

import { MailerService } from '@nestjs-modules/mailer';
declare class MailService {
    private readonly mailerService;
    constructor(mailerService: MailerService);
    sendEmail(email: string, password: string): Promise<void>;
}
export default MailService;

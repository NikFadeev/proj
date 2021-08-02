import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
class MailService {
  constructor(private readonly mailerService: MailerService) { }

  async sendEmail(email: string, password: string) {
    await this.mailerService.sendMail({
      from: 'itincubator999@gmail.com',
      to: email,
      subject: "Hello",
      text: 'Hello World',
      html: `<b>Your password: ${password}</b>`
    })
  }
}

export default MailService;

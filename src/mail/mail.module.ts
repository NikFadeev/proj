import { Module } from '@nestjs/common';
import MailService from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        port: 25,
        secure: false,
        auth: {
          user: 'itincubator999@gmail.com',
          pass: 'incubator999'
        },
        tls: {
          rejectUnauthorized: false
        }
      },
    })],
  controllers: [],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule { }


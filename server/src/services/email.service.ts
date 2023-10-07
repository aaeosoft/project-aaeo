import { User } from "../dto/User";
import { EmailNotSendedError } from "../exceptions/email/EmailNotSendedError";
import { IEmailService } from "../interfaces/services/email.interface";
import nodemailer from "nodemailer";

export class EmailService implements IEmailService {
  private static instance: EmailService;

  public static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }

    return EmailService.instance;
  }

  public async sendMail(
    user: User,
    subject: string,
    content: string
  ): Promise<Boolean> {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: "osahinoffical@gmail.com",
      to: user.getEmail(),
      subject: subject,
      text: content,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        // do something useful
      }

      throw new EmailNotSendedError();
    });

    return true;
  }
}

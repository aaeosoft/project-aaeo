import { IEmailService } from "../interfaces/services/email.interface";

export class EmailService implements IEmailService {
    public async sendMail(): Promise<Boolean> {

        return true;
    }
}
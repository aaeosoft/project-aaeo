import { User } from "../../dto/User";

export interface IEmailService {
  sendMail(user: User, subject: string, content: string): Promise<Boolean>;
}

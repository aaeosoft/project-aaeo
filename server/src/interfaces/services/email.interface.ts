export interface IEmailService {
    sendMail(): Promise<Boolean>;
}
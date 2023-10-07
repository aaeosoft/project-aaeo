import { Document } from "mongoose";
import { UserType } from "../../enums/userType.enum";

export default interface IPasswordReset extends Document {
  email: string;
  token: string;
  createdAt: Date;
}

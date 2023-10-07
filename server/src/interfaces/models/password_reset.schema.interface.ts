import { Document } from "mongoose";
import { UserType } from "../../enums/userType.enum";

export default interface IPasswordResetSchema extends Document {
  email: string;
  token: string;
  createdAt: Date;
}

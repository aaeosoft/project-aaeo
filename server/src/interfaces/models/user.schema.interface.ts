import { Document } from "mongoose";
import { UserType } from "../../enums/userType.enum";

export default interface IUserSchema extends Document {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    type: UserType,
    isActive: boolean,
    createdAt: Date
}
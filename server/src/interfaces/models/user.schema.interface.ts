import { Document } from "mongoose";

export default interface IUserSchema extends Document {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    isActive: boolean,
    createdAt: Date
}
import { Schema, model } from "mongoose";
import IUserSchema from "../interfaces/models/user.schema.interface";

const userModelSchema = new Schema<IUserSchema>({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true
});

export const UserModel = model("User", userModelSchema);
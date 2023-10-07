import { Schema, model } from "mongoose";
import IPasswordResetSchema from "../interfaces/models/password_reset.schema.interface";

const passwordResetSchema = new Schema<IPasswordResetSchema>(
  {
    email: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

export const passwordResetModel = model("PasswordReset", passwordResetSchema);

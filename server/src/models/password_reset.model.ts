import { Schema, model } from "mongoose";
import IPasswordReset from "../interfaces/models/password_reset.schema.interface";

const passwordResetSchema = new Schema<IPasswordReset>(
  {
    email: {
      type: String,
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const passwordResetModel = model("PasswordReset", passwordResetSchema);

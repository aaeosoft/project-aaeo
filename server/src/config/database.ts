import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

mongoose.connect(
    `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}`
);

mongoose.connection.on("open", () => {
    console.log("MongoDB: Connected");
});

mongoose.connection.on("error", (err) => {
    console.log("MongoDB: Error", err);
});

mongoose.Promise = global.Promise;
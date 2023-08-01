import express, { Express, NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import helmet from "helmet";
import routes from './routes';

import "./config/database";
import { BaseError } from './exceptions/BaseException';


dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(helmet({
  crossOriginEmbedderPolicy: false,
}));

app.use("/api/v1", routes);

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});



app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  return res
    .status(error.statusCode)
    .json({ "message": error.message, "name": error.name });
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
import express, { json } from 'express';
import dotenv from "dotenv";
import messageRoute from "./routes/messageRoute.js"
import cors from "cors";
const app = express();

dotenv.config();
app.use(json());
app.use(cors());

app.use('/message', messageRoute);

export default app;
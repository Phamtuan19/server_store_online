import express from 'express';
import dotenv from 'dotenv';
import connectMongoDB from './config/mongodb';
import routeConfig from './routes';
import morgan from 'morgan';
import cors from 'cors';
import { corsOptions } from './config/cors';
dotenv.config();

connectMongoDB();

const app = express();
const PORT = process.env.APP_PORT;

morgan('tiny');

app.use(cors(corsOptions));

app.use(express.json({ limit: '50mb' }));

app.use(express.urlencoded({ limit: '50mb', extended: true }));

routeConfig(app);

app.listen(PORT, () => {
   // eslint-disable-next-line no-console
   console.log(`[SUCCESS] ::: Server is listening on port: ${PORT}`);
});

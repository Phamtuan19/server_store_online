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
const CLIENT_URL = process.env.CLIENT_URL;

morgan('tiny');

app.use(cors(corsOptions));

app.use(
   cors({
      credentials: true,
      origin: [CLIENT_URL],
      optionSuccessStatus: 200,
   }),
);
app.use(function (req, res, next) {
   res.setHeader('Access-Control-Allow-Origin', CLIENT_URL);
   res.header('Access-Control-Allow-Credentials', true);
   next();
});
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
routeConfig(app);

app.listen(PORT, () => {
   // eslint-disable-next-line no-console
   console.log(`[SUCCESS] ::: Server is listening on port: ${PORT}`);
});

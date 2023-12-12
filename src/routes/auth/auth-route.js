import express from 'express';
import { signIn } from '~/controllers/auth-controller';

const authRoute = express.Router();

authRoute.post('/sign-in', signIn);

export default authRoute;

import express from 'express';
import { signIn } from '~/controllers/auth-controller';
import authentication from '~/middlewares/authentication';

const authRoute = express.Router();

authRoute.post('/sign-in', signIn);

authRoute.get('/', authentication, async (req, res) => {
   console.log(req.auth);
   return res.status(401).json('token het han.');
});

export default authRoute;

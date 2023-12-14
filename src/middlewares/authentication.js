import jwt from 'jsonwebtoken';
import { STATUS } from '~/config/status';
import { responseError } from '~/helpers/response';
import UserSchema from '~/models/user';

const authentication = (req, res, next) => {
   try {
      const authHeader = req.headers['authorization'];

      if (!authHeader) {
         return res.status(401).json('Xác thực tài khoản không thành công.');
      }

      const token = authHeader.split(' ')[1];

      if (!token || token === null) {
         return res.status(401).json('Xác thực tài khoản không thành công.');
      }

      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
         if (err) {
            return responseError(res, 'Xác thực tài khoản thất bại.', STATUS.UNAUTHORIZED);
         }

         const dataGetDB = await UserSchema.findOne({
            _id: user._id,
         });

         if (!dataGetDB) {
            return responseError(res, 'Xác thực tài khoản thất bại.', STATUS.UNAUTHORIZED);
         }

         const { password, ...auth } = dataGetDB._doc;

         req.auth = auth;

         next();
      });
   } catch (error) {
      return responseError(res, error, STATUS.UNAUTHORIZED);
   }
};

export default authentication;

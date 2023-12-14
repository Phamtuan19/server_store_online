/* eslint-disable no-unused-vars */
import { responseData, responseError, responseSuccess } from '~/helpers/response';
import UserSchema from '~/models/user';
import jwt from 'jsonwebtoken';
/**
 * [POST] - auth/sign-in
 */
const signIn = async (req, res) => {
   try {
      const { username, password } = req.body;

      const searchQuery = {
         $or: [{ email: username }, { username: username }],
      };

      const user = await UserSchema.findOne(searchQuery);

      if (!user) {
         return responseError(res, 'Tài khoản hoặc email đăng nhập không tồn tại.');
      }

      if (!user.authenticate(password)) {
         return responseError(res, 'Tài khoản hoặc mật khẩu đăng nhập không chính xác.');
      }

      const token = jwt.sign({ _id: user._id, email: user.email, role: user.role }, process.env.ACCESS_TOKEN_SECRET, {
         // set time refesh token
         // expiresIn: 10,
      });

      user.password = '';
      const { password: _, ...userInfo } = user._doc;
      return responseSuccess(res, responseData('Đăng nhập thành công', { token, ...userInfo }));
   } catch (error) {
      return res.status(400).json(error);
   }
};

export { signIn };

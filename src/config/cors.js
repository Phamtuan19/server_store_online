import ApiError from '~/utils/ApiError';
import { STATUS } from './status';
import CLIENT_URL from './client-url';

// Cấu hình CORS Option trong dự án thực tế
export const corsOptions = {
   origin: function (origin, callback) {
      // Cho phép việc gọi API bằng POSTMAN trên môi trường dev,
      // Thông thường khi sử dụng postman thì cái origin sẽ có giá trị là undefined
      if (!origin || CLIENT_URL.includes(origin)) {
         return callback(null, true);
      }

      // Kiểm tra dem origin có phải là domain được chấp nhận hay không
      if (CLIENT_URL.includes(origin)) {
         return callback(null, true);
      }

      // Domain không được chấp nhận thì trả về lỗi
      return callback(new ApiError(STATUS.FORBIDDEN, `${origin} not allowed by our CORS Policy.`));
   },

   // Some legacy browsers (IE11, various SmartTVs) choke on 204
   optionsSuccessStatus: 200,

   // CORS sẽ cho phép nhận cookies từ request,
   credentials: true,
};

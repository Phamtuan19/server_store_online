import { STATUS } from '~/config/status';
import ApiError from '~/utils/ApiError';

const responseSuccess = (res, data) => {
   return res.status(STATUS.SUCCESS).send(data);
};

const responseError = (res, error, statusConfig = null) => {
   if (error instanceof ApiError) {
      const status = error.status;

      if (typeof error.error === 'string') {
         const message = error.error;
         const data = responseData(message, null, false);
         return res.status(statusConfig || status).send(data);
      }
      // Case error is object
      return res.status(status).send(responseData('Đã có lỗi xảy ra!!!', null, false));
   }
};

const responseData = (message = '', data = null, success = true) => {
   return {
      success,
      message,
      data,
   };
};

export { responseSuccess, responseError, responseData };
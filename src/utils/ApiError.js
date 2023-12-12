/**
 * Định nghĩa riêng một Class ApiError kế thừa class Error sẵn (điều này cần thiết và là Best Practice vì class Error nó là class built-in sẵn)
 */
class ApiError extends Error {
   name;
   status;

   constructor(status, message) {
      super(message);

      this.name = 'Api Error';

      this.status = status;
   }
}

export default ApiError;

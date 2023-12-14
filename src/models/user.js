/**
 * "A bit of fragrance clings to the hand that gives flowers!"
 */

import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new Schema(
   {
      email: {
         type: String,
         required: true,
         unique: true,
      },
      password: {
         type: String,
         required: true,
      },
      username: {
         type: String,
         required: true,
         unique: true,
      },
      fullname: {
         type: String,
         required: true,
      },
      address: {
         type: String,
         required: true,
      },
      avatar: {
         type: String,
      },
      role: {
         type: String,
         enum: ['USER', 'ADMIN', 'EMPLOYEE'],
         default: 'USER',
      },
      gender: {
         enum: ['MAN', 'FEMAN'],
         type: String,
      },
      phone: {
         type: String,
      },
   },
   {
      timestamps: true,
   },
);

UserSchema.methods = {
   bcryptPassword(password) {
      if (!password) return '';
      return bcrypt.hashSync(password, 10);
   },
   authenticate(password) {
      return bcrypt.compareSync(password, this.password);
   },
};

UserSchema.pre('save', function (next) {
   this.password = this.bcryptPassword(this.password);
   next();
});

export default new mongoose.model('user', UserSchema);

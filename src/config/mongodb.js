/* eslint-disable no-console */
/**
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_URL = 'mongodb+srv://phamtuan19hd:phamtuan19hd@shoeshopee.jy326ur.mongodb.net/?retryWrites=true&w=majority';

const connectMongoDB = () => {
   mongoose.set('strictQuery', false);

   mongoose.connect(DB_URL, {
      useNewUrlParser: true,
   });

   mongoose.connection.on('connected', function () {
      console.log('Mongoose default connection is open to MongoDB Atlas');
   });

   mongoose.connection.on('error', function (err) {
      console.log('Mongoose default connection has occured ' + err + ' error');
   });

   mongoose.connection.on('disconnected', function () {
      console.log('Mongoose default connection is disconnected');
   });
};

export default connectMongoDB;

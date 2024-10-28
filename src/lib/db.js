// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     const { connection } = await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "work_together",
//     });
//     console.log("db connected...");
//     console.log("Connected with host: ", connection.host);
//   } catch (error) {
//     console.log("failed to connect with database");
//     console.log(error);
//   }
// };

import mongoose from 'mongoose';
const colors = require("colors");

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {});
    console.log(`Database Connected Succefully ${conn.connection.host}`.bgBlue);
  } catch (error) {
    console.log(`error : ${error.message}`);
  }
};
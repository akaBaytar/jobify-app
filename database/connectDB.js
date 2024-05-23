import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected the ${mongoose.connection.name} database. (${mongoose.connection.host})`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

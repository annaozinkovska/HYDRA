import mongoose from 'mongoose';

// Установка соединения с базой данных MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/hydra', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Successful connection to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
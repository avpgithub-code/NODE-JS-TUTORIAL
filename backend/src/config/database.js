import mongoose from 'mongoose'; // Assuming this import exists

// Assuming you have a variable named MONGODB_URI in your .env
const connectionString = process.env.MONGO_DB_URI; 

const connectDB = async () => {
  try {
    // 👇 ADD THIS LINE TO DEBUG 👇
    console.log("Attempting to connect with URI:", connectionString); 

    await mongoose.connect(connectionString); // This is line 9 where the error occurs
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    throw error; // Re-throw so startServer can catch it
  }
};

export default connectDB;
import mongoose from "mongoose";

const connectDB = async() => {

    try {
        await mongoose.connect((process.env.MONGODB_URL as string), {});
        console.log(`MongoDB connected at ${process.env.MONGODB_URL as string}`);
    } catch {
        console.log("Error when connecting to MongoDB");
    }
}

export default connectDB;
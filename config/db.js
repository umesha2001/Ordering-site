import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://umeshaudayangani2001_db_user:P0louhb8JmmRVFWW@cluster0.olvkbk9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    serverSelectionTimeoutMS: 10000,
});
    } catch (error) {
        console.log("DB Connection Error:", error);
    }
}
// import mongoose from 'mongoose';
// const connectDB = async () => {

//     mongoose.connection.on('connected', ()=> console.log("Database connected"))
//     await mongoose.connect(`${process.env.MONGO_URI}/herhealth`)
//     }
// export default connectDB;

import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("sDatabase connected successfully");
    } catch (error) {
        console.error(" Database connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;

import mongoose from "mongoose";

const dbConnection = async () => {
try {
await mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

    console.log("Connection with MongoDB : ON");
} catch (e) {
    console.log("Error connecting with MongoBD: \n" + e);
}
};

export default { dbConnection };

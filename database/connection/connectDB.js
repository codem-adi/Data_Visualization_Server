import mongoose from "mongoose";

const URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/"
const DBName = process.env.MONGODB_NAME || "datavisualizaion"

export default function connectToDb() {

    try {
        mongoose.connect(URL + DBName)
        console.log("Database Connected to ", DBName)
    } catch (error) {
        throw Error("Database not connected ", error)
    }
}
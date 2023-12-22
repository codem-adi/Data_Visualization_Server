import env from "dotenv"
import express from "express"
import connectToDb from "./database/connection/connectDB.js"
import UserRoute from "./routes/user.js"
import DataRoute from "./routes/data.js"
import cors from "cors"
import cookieParser from "cookie-parser"

env.config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
const PORT = process.env.PORT || 3000

app.use("/api/v1/user", UserRoute);
app.use("/api/v1/data", DataRoute);


app.listen(PORT, () => {
    console.log("Server is listening on port ", PORT);
    connectToDb()
})

import mongoose from "mongoose";
import bcrypt from "bcryptjs"

const User = new mongoose.Schema({
    first_name: { type: String, require: true, lowercase: true },
    last_name: { type: String, require: true, lowercase: true },
    email: { type: String, require: true, lowercase: true, unique: true },
    number: { type: Number, require: true },
    password: { type: String },
    salt: { type: String },
}, { versionKey: 0, timestamps: true })

User.pre(
    "save",
    async function (next) {
        console.log("PRE save   ", this.isModified("password"))
        if (!this.isModified("password")) {
            console.log("Password not changed ");
            return
        }
        console.log("Password ", this.password)
        console.log("Data is about to save ");
        this.password = await bcrypt.hash(this.password, 10)
        console.log("Password ", this.password)
        next()
    }
)


export default mongoose.model("users", User);
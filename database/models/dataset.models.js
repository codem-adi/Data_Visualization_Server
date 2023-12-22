import mongoose from "mongoose"

const UserRefData = new mongoose.Schema({
     name: { type: String, require: true, lowercase: true },
     type: { type: String, require: true },
     size: { type: String, require: true },
     total_count: { type: Number, require: true },
     user_id: {
          type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
     }
}, { versionKey: 0, timestamps: true })

export default mongoose.model("data_set_referance", UserRefData)
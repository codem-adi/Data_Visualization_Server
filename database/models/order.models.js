
import mongoose from "mongoose"

const Order = new mongoose.Schema({
     Order_ID: { type: String, require: true },
     Order_Date: { type: String },
     Customer_ID: { type: String, require: true },
     Customer_Name: { type: String },
     Address: { type: String },
     City: { type: String },
     State: { type: String },
     ZIP_Code: { type: String },
     Country: { type: String },
     Salesperson: { type: String },
     Region: { type: String },
     Shipped_Date: { type: String },
     Shipper_Name: { type: String },
     Ship_Name: { type: String },
     Ship_Address: { type: String },
     Ship_City: { type: String },
     Ship_State: { type: String },
     Ship_ZIP: { type: String },
     Ship_Country: { type: String },
     Payment_Type: { type: String },
     Product_Name: { type: String },
     Category: { type: String },
     Unit_Price: { type: String },
     Quantity: { type: String },
     Revenue: { type: String },
     Shipping_Fee: { type: String },
     user_id: {
          type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
     },
     data_set_id: {
          type: mongoose.Schema.Types.ObjectId, ref: 'UserRefData', required: true
     }
}, { versionKey: 0, })

export default mongoose.model("orders", Order)
import datasetModels from "../database/models/dataset.models.js";
import orderModels from "../database/models/order.models.js";

const saveDataset = async (req, resp) => {
     try {
          const { id } = req.customer;
          const { name, type, size } = req.body.info;
          const orerList = req.body.data;
          if (orerList.length) {
               const dataset = await new datasetModels({
                    name, type, size,
                    user_id: id,
                    total_count: orerList.length
               }).save({ update: true });
               const newOrderList = orerList.map(el => ({ ...el, user_id: id, data_set_id: dataset._id }))
               const order = await orderModels.insertMany(newOrderList)
               resp.status(200).json({ message: "User dataset saved", status: true })
          }
          else {
               resp.status(202).json({ message: "No data available to upload", status: false })
          }
     } catch (error) {
          console.log("Error saving the dataset");
          resp.status(500).json({ message: "Error saving the user dataset", status: false })
     }
}

export default saveDataset;
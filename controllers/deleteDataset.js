import datasetModels from "../database/models/dataset.models.js"
import orderModels from "../database/models/order.models.js"

const deleteDataset = async (req, resp) => {
     try {
          const { datasetID } = req.query
          const dataset = await datasetModels.deleteOne({ _id: datasetID });
          const orders = await orderModels.deleteMany({ data_set_id: datasetID });
          console.log("dataset ", dataset);
          console.log("orders ", orders);
          resp.status(200).json({ message: "Dataset deleted successfully", status: true, data: { datasetDeleted: dataset.deletedCount, orderDeleted: orders.deletedCount } })

     } catch (error) {
          resp.status(500).json({ message: "Error deleting the dataset", status: false })

     }
}

export default deleteDataset;
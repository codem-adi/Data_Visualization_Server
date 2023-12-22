import orderModels from "../database/models/order.models.js"

const getAllOrders = async (req, resp) => {
     try {
          const { datasetID } = req.query
          const orders = await orderModels.find({ data_set_id: datasetID });
          console.log("ORders ", orders)
          resp.status(200).json({ message: "Dataset deleted successfully", status: true, data: orders })

     } catch (error) {
          resp.status(500).json({ message: "Error deleting the dataset", status: false })

     }
}

export default getAllOrders;
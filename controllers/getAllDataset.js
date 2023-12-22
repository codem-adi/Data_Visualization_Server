import datasetModels from "../database/models/dataset.models.js"

const getAllDataset = async (req, resp) => {
     try {
          console.log("User ", req.customer)
          const customer = req.customer
          const dataset = await datasetModels.find({ user_id: customer.id }, { createdAt: 0, updatedAt: 0 })
          console.log("dataset ", dataset);
          resp.status(200).json({ message: "Here is all the dataset", status: true, data: dataset })

     } catch (error) {
          resp.status(500).json({ message: "Error getting all data", status: false })

     }

}
export default getAllDataset
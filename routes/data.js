import { Router } from "express";
import deleteDataset from "../controllers/deleteDataset.js";
import saveDataset from "../controllers/saveDataset.js";
import validateToken from "../middleware/validateToken.js";
import getAllDataset from "../controllers/getAllDataset.js";
import getAllOrders from "../controllers/getAllOrders.js";

const router = Router();

router.route("/getall").get(validateToken, getAllDataset)
router.route("/upload").post(validateToken, saveDataset)
router.route("/delete").delete(validateToken, deleteDataset)
router.route("/orders").get(validateToken, getAllOrders)



export default router;
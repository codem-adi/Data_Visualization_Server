import { Router } from "express";
import loginUser from "../controllers/loginUser.js";
import registerUser from "../controllers/registerUser.js";
import authenticate from "../controllers/authenticate.js";

const router = Router();

router.route("/login").post(loginUser)
router.route("/register").post(registerUser)
router.route("/authenticate").get(authenticate)

export default router;
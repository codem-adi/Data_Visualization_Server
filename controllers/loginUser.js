import userModels from "../database/models/user.models.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const loginUser = async (req, resp) => {
    try {
        console.log("req ", req);
        const { email, password } = req.body.data;
        console.log("Email ", email)
        const userDetails = await userModels.find({ email: email }, { password: 1, salt: 1, _id: 1 })
        console.log("userDetails ", userDetails)
        if (userDetails.length) {
            const result = await bcrypt.compare(password, userDetails[0].password)
            console.log("Result ", result);


            if (result) {
                // create the JWT
                var token = jwt.sign({ email, id: userDetails[0]._id.toString() }, process.env.JWT_SECRET, { algorithm: 'HS256', expiresIn: '10000000' });
                return resp.status(200).json({ message: "User logged in successfully", status: true, token: token })
            }

            else {
                resp.status(202).json({ message: "Given password is not correct for the email", status: true })
            }
        }
        else {
            resp.status(404).json({ message: "No user found with that email", status: false })
        }

    } catch (error) {
        console.log("It's error while login the user ", error)
        resp.status(500).json({ message: "Error while loging the user", status: false })
    }
}

export default loginUser

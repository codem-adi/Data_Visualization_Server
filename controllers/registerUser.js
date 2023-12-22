import userModels from "../database/models/user.models.js"
import generateSalt from "../utils/generateSalt.js";

const registerUser = async (req, resp) => {
    try {
        console.log("Body ", req.body)
        const { firstName, lastName, email, phone, password } = req.body;
        const SALT = generateSalt()
        console.log("Salt ", SALT);
        const User = new userModels({
            first_name: firstName,
            last_name: lastName,
            email: email,
            number: phone,
            password: password,
            salt: SALT
        })
        const userSaved = await User.save({ update: true })
        console.log("User ", userSaved);

        resp.status(200).json({ message: "User registered successfully", status: true })
    } catch (error) {
        console.log("It's error while registering the user ", error)
        resp.status(500).json({ message: "Error while saving the user", status: false })
    }
}

export default registerUser


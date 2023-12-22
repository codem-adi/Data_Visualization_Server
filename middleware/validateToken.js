import { verifyToken } from "../controllers/authenticate.js";

const validateToken = (req, resp, next) => {
     console.log('Middleware executed!  ', req.headers.authorization);
     const validtoken = verifyToken(req.headers.authorization, process.env.JWT_SECRET)
     console.log("validtoken ", validtoken)
     if (validtoken.status) {
          console.log("Token valide ", validtoken.data)
          req.customer = validtoken.data
          next();
     }
     else {
          resp.status(401).json({ message: "User token expired please login again", status: false })
     }
};

export default validateToken
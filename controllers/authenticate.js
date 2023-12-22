import jwt from "jsonwebtoken"

const authenticate = async (req, resp) => {
    try {
        const Token = req.headers.authorization
        const verified = verifyToken(Token, process.env.JWT_SECRET)
        if (verified.status) {
            resp.status(200).json({ message: "User have valid token", status: true })
        }
        else {
            resp.status(401).json({ message: "User token expired", status: false })
        }

    } catch (error) {
        resp.status(500).json({ message: "User registered successfully", status: false })
    }
}

export default authenticate


export function verifyToken(token, secretKey) {
    try {
        const decoded = jwt.verify(token.split(" ")[1], secretKey);
        const currentTimestamp = Math.floor(Date.now() / 1000);
        if (decoded.exp && decoded.exp < currentTimestamp) {
            return { status: false };
        }
        return {
            status: true, data: decoded
        };
    } catch (error) {
        return { status: false };
    }
}

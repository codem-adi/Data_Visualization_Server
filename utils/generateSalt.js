
const generateSalt = () => {
    const length = 24;
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$@&*^!";
    let salt = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        salt += charset.charAt(randomIndex);
    }

    return salt;
}
export default generateSalt 
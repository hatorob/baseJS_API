const crypto = require("crypto");

const generarClaveJWT = () => {
    const secretKey = crypto.randomBytes(64).toString("hex");
    console.log("Tu clave JWT segura es:\n", secretKey);
};

generarClaveJWT();
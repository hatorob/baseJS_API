const { Router } = require("express");
const AuthController = require("./controller");

class AuthRoutes {

    static get routes() {
        const router = Router();
        const authController = new AuthController();

        router.post("/register", authController.register);
        router.post("/login", authController.login);

        return router;
    }

}


module.exports = AuthRoutes;
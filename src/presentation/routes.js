const { Router } = require("express");
const TaskRoutes = require("./tasks/routes");
const AuthRoutes = require("./auth/routes");
const authMiddleware = require("../middlewares/authMiddleware")

class AppRoutes {
    static get routes() {
        const router = Router();
        //! Routes
        router.use('/api/auth', AuthRoutes.routes);
        router.use('/api/tasks', authMiddleware, TaskRoutes.routes);
 
        return router;
    }
};

module.exports = AppRoutes;
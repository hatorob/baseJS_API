const { Router } = require("express");
const TaskRoutes = require("./tasks/routes");

class AppRoutes {
    static get routes() {
        const router = Router();
        //! Routes
        router.use('/api/tasks', TaskRoutes.routes);
 
        return router;
    }
};

module.exports = AppRoutes;
const { Router } = require("express");
const TasksController = require("./controller");

class TaskRoutes {

    static get routes() {
        const router = Router();
        const taskController = new TasksController();
        router.get('/', taskController.getTasks);


        return router;
    }

}


module.exports = TaskRoutes;
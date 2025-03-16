const { Router } = require("express");
const TasksController = require("./controller");

class TaskRoutes {

    static get routes() {
        const router = Router();
        const taskController = new TasksController();
        router.get('/', taskController.getTasks);
        router.get('/:id', taskController.getTasksById);
        router.post('/add', taskController.createTask);
        router.put('/update', taskController.updateTask);
        router.put('/delate', taskController.deleteTask);


        return router;
    }

}


module.exports = TaskRoutes;
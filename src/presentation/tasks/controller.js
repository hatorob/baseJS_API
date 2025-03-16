// Crear el modelo
const { TaskSchema } = require("../../models/");

class TasksController {
    
    constructor() {}

    getTasks = async(req,res) => {
        let { user } = req.body;
        try {
            if(!user) throw new Error('is required id to user');
            let tasks = await TaskSchema.findAll({
                where: {
                    user,
                    status: 1
                }
            })
            return res.status(200).json({data: tasks});
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }
    
    getTasksById = async(req,res) => {
        let { id } = req.params;
        try {
            if(!id) throw new Error('is required to task id');
            let tasks = await TaskSchema.findAll({
                where: {
                    id
                }
            })
            return res.status(200).json({data: tasks});
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

    createTask = async(req,res) => {
        let { ...objTask  } = req.body;
        try {
            if( Object.keys(objTask).length == 0 ) throw new Error('is required to name and description to Do');
            let newTask = await TaskSchema.create(objTask);
            return res.status(200).json({message: `Add task with topic ${newTask.name}`});
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    }

    updateTask = async(req,res) => {
        let { id, ...objTask  } = req.body;
        try {
            if( Object.keys(objTask).length == 0 ) throw new Error('is required to name and description to Do');
            let updateTask = await TaskSchema.update(objTask,{
                where: { id }
            })
            return res.status(200).json({message: `Success update task`});
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    }

    deleteTask = async(req,res) => {
        let { id } = req.body;
        try {
            if( !id ) throw new Error('is required to task id');
            let delateTask = await TaskSchema.update( {status: 0}, {
                where: { id }
            })
            return res.status(200).json({message: `Delate task`});
        } catch (error) {
            return res.status(400).json({error: error.message});
        }
    }
}

module.exports = TasksController;
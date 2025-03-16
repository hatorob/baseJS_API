// Crear el modelo

class TasksController {
    
    constructor() {}

    getTasks = async(req,res) => {
        try {
            console.log("ruta all Tasks");
            res.status(200).json({ok: "ok"});
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }
}

module.exports = TasksController;
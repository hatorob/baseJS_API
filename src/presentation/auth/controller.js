require("dotenv").config();
const jwt = require("jsonwebtoken");
const {UsersSchema,Op} = require("../../models/");

class AuthController {

    constructor() {}

    //! funcion para generar token - inicio
    generateToken = (user) => {
        return jwt.sign(
            { id: user.id, name: user.name, email: user.email, username: user.username, role: user.role }, 
            process.env.JWT_SECRET, 
            { expiresIn: "1h" }
        );
    };
    //! funcion para generar token - fin

    //! Crear usuario desde la ruta de register - inicio
    register = async(req,res) => {

        let { ...objUser } = req.body;
        try {
            if(!objUser.name && !objUser.password && !objUser.username && !objUser.email) throw new Error('is required to name, username, email and password');
            const newUser = await UsersSchema.create(objUser);
            const token = this.generateToken(newUser);
            if(!token) throw new Error('no generate tojken new user')
            return res.status(200).json({user: newUser, token});
        } catch (error) {
            return res.status(400).json({error: error.message})
        }

    }
    //! Crear usuario desde la ruta de register - fin

    //! Login
    login = async(req,res) => {
        let { username, password } = req.body;
        try {
            if(!username && !password) throw new Error('is required to user or email with password');
            const user = await UsersSchema.findOne({
                where: {
                    [Op.or]: [
                        { email: username },
                        { username: username }
                    ]
                }
            });

            if (!user || !(await user.validPassword(password))) {
                return res.status(401).json({ error: "Credenciales incorrectas" });
            }
    
            const token = this.generateToken(user);
            return res.status(200).json({user: user, token});
        } catch (error) {
            return res.status(400).json({error: error.message})
        }
    }

}

module.exports = AuthController;
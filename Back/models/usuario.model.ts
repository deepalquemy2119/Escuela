import { DataTypes } from "sequelize";
import db from "../DDBB/connection";  // para import name + tab

const Usuario = db.define('usuarios', {
    id: {
        type: DataTypes.BIGINT
    },
    username: {
        type: DataTypes.STRING(25)
    },
    email: {
        type: DataTypes.STRING(60)
    },
    state: {
        type: DataTypes.BOOLEAN
    },
    password: {
        type: DataTypes.STRING(11)
    },
    
})

export default Usuario;
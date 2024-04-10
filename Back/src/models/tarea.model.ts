import { DataTypes } from "sequelize";
import connect from "../Connections/mysql.connection";
import ModelPersona from "./persona.model";
import { DATE } from "sequelize";

const ModelTarea = connect.define('tareas',{
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },

    name: { type: DataTypes.STRING, allowNull: false },

    description: { type: DataTypes.STRING, allowNull:false },

    creation: { type:DataTypes.DATE, allowNull:false, validate: { isAfter: "1975-01-01", isBefore: "2024-12-31" } },

    state: { type: DataTypes.BOOLEAN, allowNull:false },

    pass_task: { type: DataTypes.STRING(11), allowNull:false, validate:{ len:[ 3, 12 ] } },

    correo: { type: DataTypes.STRING(60), unique:true, validate:{ isEmail: true } },
    
})

ModelPersona.hasMany( ModelTarea, { foreignKey: 'correo' } )
ModelTarea.belongsTo(ModelPersona, { foreignKey: 'correo' })


export default ModelTarea
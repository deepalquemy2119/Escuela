import { DataTypes } from "sequelize";
import connect from "../Connections/mysql.connection";
import ModelPersona from "./persona.model";

const ModelMensaje = connect.define('mensajes',{
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },

    title: { type: DataTypes.STRING(50), allowNull: false },

    description: { type: DataTypes.STRING(250), allowNull:false },

    creation: { type: DataTypes.DATE, allowNull:false },

    state: { type: DataTypes.BOOLEAN, allowNull:false }, 
    
    mensaje_ID: { type: DataTypes.BIGINT, allowNull: false},   
       
})


ModelPersona.hasMany( ModelMensaje, { foreignKey: 'id' } )
ModelMensaje.belongsTo(ModelPersona, { foreignKey: 'id' })



export default ModelMensaje

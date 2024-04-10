import { DataTypes } from "sequelize";
import connect from "../Connections/mysql.connection";
import ModelPersona from "./persona.model";

const ModelAdministracion = connect.define('administracion',{
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },

    username: { type: DataTypes.STRING(50), allowNull: false, unique:true },

    task: { type: DataTypes.STRING(60), allowNull:false },

    notice: { type: DataTypes.STRING(60), allowNull:true },

    state: { type: DataTypes.BOOLEAN, allowNull:false },
    
    password: { type:DataTypes.STRING(11), allowNull:false }
       
})


ModelPersona.hasMany( ModelAdministracion, { foreignKey: 'id' } )
ModelAdministracion.belongsTo(ModelPersona, { foreignKey: 'id' })



export default ModelAdministracion

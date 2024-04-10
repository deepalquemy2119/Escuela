import { DataTypes } from "sequelize";
import connect from "../Connections/mysql.connection";

const ModelPersona = connect.define('personas',{
    id: { type: DataTypes.BIGINT, primaryKey: true, autoIncrement: true },

    name: { type: DataTypes.STRING, allowNull: false },

    last_name: { type: DataTypes.STRING, allowNull:false },

    fecha_nac: { type: 'TIMESTAMP', validate: { isAfter: "1975-01-01", isBefore: "2002-01-01"  } },

    correo: { type:DataTypes.STRING(60), allowNull:false, unique:true, validate: { isEmail: true } },

    state: { type: DataTypes.BOOLEAN, allowNull:false },

    password: { type: DataTypes.STRING(11), allowNull:false, validate: { len: [3,12] } },
    
       
})



export default ModelPersona
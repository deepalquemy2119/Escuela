import { DataTypes } from 'sequelize';
import db from '../DDBB/connection';

const Cuenta = db.define('cuentas', {
    idCuenta: {
        type: DataTypes.BIGINT
    },
    mensaje: {
        type: DataTypes.STRING(200)
    },
    stateMensaje: {
        type: DataTypes.BOOLEAN
    }
 
})
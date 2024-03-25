import { Sequelize } from 'sequelize';

// name:DDBB , userName: root, passRoot: .....
const db = new Sequelize('Escuela', 'root', 'Utn54200593$&?',{
    host: 'localhost',
    dialect: 'mssql',
    //logging: false      //---> me muestra todo el SQL en consola 
});


export default db;
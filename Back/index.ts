import express from 'express';
import connect from './src/Connections/mysql.connection'
import { port } from "./config";
//import { log } from 'console';
import { App } from './src/app'

const  app = express();

async function main() {
    const app = new App(port)
            await app.listen()    
}
main()

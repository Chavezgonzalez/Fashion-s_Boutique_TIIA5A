import moongose from "mongoose";
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { test } from "./backend/controllers/ReprobadosController.js";

dotenv.config();
moongose.connect(process.env.url_db)
.then(()=>{
    console.log("La bd esta funcionando correctamente")
}).catch((error)=>{
    console.log(error)
})

const app = express();
app.use(cors());
app.listen(4000, ()=>{
    console.log('Servidor en linea')
})

test()


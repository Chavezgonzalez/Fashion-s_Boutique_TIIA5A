import {Schema, model} from 'mongoose';

const tiendaSchema = new Schema({
    name: String,
    price: int,
    ID : String
})

export const modeltienda = new model("productos", tiendaSchema)



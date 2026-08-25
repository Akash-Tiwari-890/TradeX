const {Schema} = require ("mongoose");


const HoldingSchema = new Schema({

    name: String,
    qty: Number,
    avg: Number,
    price: Number,
  
})

module.exports={HoldingSchema};
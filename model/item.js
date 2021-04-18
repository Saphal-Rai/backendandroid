const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
    {
        titlename : {
            type : String,
            required : [true,'Enter food name']
        },
        writer : {
            type : String,
            required : [true,'Enter food type']
        },
    
        price: {
            type: String,
            required : [true,'Enter food price']
            },
        
        photo: {
            type: String,
            default: "no-photo.jpg",
          },
          createdAt: {
            type: Date,
            default: Date.now,
          },
    }
);


module.exports = mongoose.model("Item",ItemSchema);

const mongoose = require('mongoose');
const date = new Date().toLocaleDateString("en-US").split("/").toString()
const Cart = mongoose.model('Cart', {

    itemName : {
        type : String,
        required : [true,'Enter Book name']
    },
    itemPrice: {
        type: String,
        required : [true,'Enter Book price']
        },
    photo: {
        type: String,
        default: "no-photo.jpg",
      },
    qantity: {
        type: Number,
        default: 1,
      },

});

module.exports = Cart
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,  //To store the primary key of the user
        ref: "User",
      },
      name: String,
      price: Number,
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  totalPrice : Number,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});
module.exports= mongoose.model("Order", orderSchema);

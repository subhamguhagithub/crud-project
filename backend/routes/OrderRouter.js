const OrderController = require("../controller/orderController");
const express = require("express");
const orderRouter = express.Router();

// Changed 'router' to 'orderRouter' to match the variable name above
orderRouter.post("/place-order", OrderController.placeOrder);

module.exports = orderRouter;
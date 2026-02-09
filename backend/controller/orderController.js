const Order=require("../models/Order")
const User=require("../models/User")

const placeOrder = async (req,res) =>{
    try{
         const {cartItems}  = req.body;
         let totalPrice=0;
         const items = [];
         for(let cartItem of cartItems)
         {
             const user = await User.findById(cartItem._id);
             if (!user) continue;
             totalPrice += user.price * (cartItem.quantity || 1);
             items.push({
                userId: user._id,
                name : user.name,
                price: user.price,
                quantity: cartItem.quantity || 1,
             });
             const order = new Order({
                items,
                totalPrice,
             });
             await order.save();
             res.status(201).json({
                message: "Order placed successfully",
                order,
             });
         }
    }catch (error){
        res.status(500).json({ error : error.message});
    }
}
module.exports={placeOrder}
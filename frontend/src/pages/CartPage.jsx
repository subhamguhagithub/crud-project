import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeFromCart,
  decreaseQty,
  addToCart,
} from "../redux/cartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price using reduce
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/orders/place-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cartItems, totalPrice }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Order Placed Successfully!");
        dispatch(clearCart());
      } else {
        alert(data.message || "❌ Order Failed");
      }
    } catch (error) {
      console.error(error);
      alert("❌ Server Error");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item._id} style={{ marginBottom: "10px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
              {/* This line matches the exact format shown in your photo */}
              <span>
                {item.name} - ₹{item.price} x {item.quantity}
              </span>
              
              <div style={{ marginTop: "5px" }}>
                <button onClick={() => dispatch(decreaseQty(item._id))}>-</button>
                <button style={{ margin: "0 10px" }} onClick={() => dispatch(addToCart(item))}>+</button>
                <button 
                  style={{ background: "#ff4d4d", color: "white", border: "none", cursor: "pointer" }} 
                  onClick={() => dispatch(removeFromCart(item._id))}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div style={{ marginTop: "20px" }}>
            <h3>Total: ₹{totalPrice}</h3>
            
            <button
              onClick={handlePlaceOrder}
              style={{
                background: "green",
                color: "white",
                padding: "10px 20px",
                border: "none",
                cursor: "pointer",
                borderRadius: "4px",
                marginTop: "10px"
              }}
            >
              Place Order
            </button>

            <button
              onClick={() => dispatch(clearCart())}
              style={{
                background: "transparent",
                color: "red",
                marginLeft: "15px",
                border: "1px solid red",
                cursor: "pointer",
                padding: "5px 10px"
              }}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
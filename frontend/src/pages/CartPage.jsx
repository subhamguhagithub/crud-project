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

  // Get cart items from redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // 👉 Place Order API
  const handlePlaceOrder = async () => {
    try {
      const res = await fetch(
        "http://localhost:5000/api/orders/place-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cartItems,
            totalPrice: totalPrice,
          }),
        }
      );

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
    <div style={{ padding: "20px", maxWidth: "700px", margin: "auto" }}>
      <h2 style={{ textAlign: "center" }}>🛒 My Cart</h2>

      {cartItems.length === 0 ? (
        <h3 style={{ textAlign: "center", marginTop: "30px" }}>
          Your cart is empty
        </h3>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "15px",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Product Info */}
              <div>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>

              {/* Buttons */}
              <div>
                <button
                  onClick={() => dispatch(decreaseQty(item._id))}
                  style={{ padding: "5px 10px" }}
                >
                  -
                </button>

                <button
                  onClick={() => dispatch(addToCart(item))}
                  style={{ margin: "0 10px", padding: "5px 10px" }}
                >
                  +
                </button>

                <button
                  onClick={() => dispatch(removeFromCart(item._id))}
                  style={{
                    background: "#ff4d4d",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total + Actions */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <h3>Total: ₹{totalPrice}</h3>

            <div>
              <button
                onClick={() => dispatch(clearCart())}
                style={{
                  background: "red",
                  color: "white",
                  padding: "10px",
                  border: "none",
                  cursor: "pointer",
                  marginRight: "10px",
                  borderRadius: "4px",
                }}
              >
                Clear Cart
              </button>

              <button
                onClick={handlePlaceOrder}
                style={{
                  background: "green",
                  color: "white",
                  padding: "10px 15px",
                  border: "none",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;

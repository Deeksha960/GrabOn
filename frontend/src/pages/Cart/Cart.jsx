import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Cart = () => {
  const {
    cartItems,
    food_list,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="back">
        <Link to="/">
          <img src={assets.back_icon} alt="" />
        </Link>
      </div>
      <div className="cart-items">
        <div className="cart-items-title">
          <p></p>
          <p>Items</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Add/Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className="cart-items-title cart-items-item">
                  <img src={url + "/images/" + item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₹{item.price * cartItems[item._id]}</p>
                  {!cartItems[item._id] ? (
                    <img
                      className="add"
                      onClick={() => addToCart(item._id)}
                      src={assets.add_icon_white}
                      alt=""
                    />
                  ) : (
                    <div className="options">
                      <p
                        onClick={() => removeFromCart(item._id)}
                        className="remove"
                      >
                        -
                      </p>

                      <p>{cartItems[item._id]}</p>

                      <p onClick={() => addToCart(item._id)} className="add">
                        +
                      </p>
                    </div>
                  )}
                </div>
                <hr />
              </>
            );
          }
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Total Bill</h2>
          <div>
            <div className="cart-total-details">
              <p>Item total</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <br />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-promocode">
              <div>
                <p>If you have a promo code, Enter it here</p>
                <div className="cart-promocode-input">
                  <input type="text" placeholder="promo code" />
                  <button>Submit</button>
                </div>
              </div>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>To Pay</b>
              <b>
                ₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>PLACE ORDER</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";



const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
    }
    if (token) {
    }

  const removeFromCart = async (itemId) => {
    if (token) { 
    }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  

  const getTotalCartItems = () => {
    let totalItem = 0;
    }

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");    

  const loadCartData = async (token) => {
    setCartItems(response.data.cartData);

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
      }
    }
    loadData();
 

  const ContextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    url,
    token,
    setToken,
  

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  


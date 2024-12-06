import React, {useEffect, useState} from 'react'
import './Orders.css'
import { toast } from "react-toastify";
import axios from "axios"
import {assets} from "../../assets/assets"


const Orders = ({ url }) => {
  
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
      console.log(response.data.data);
    }
    else {
      toast.error("Error")
    }
  }

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url + "/api/order/status", {
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
    }
     
  }

  (function() {
    let throttlePause;
  
    document.addEventListener('click', function(e) {
      if (!e.target.closest('#wm-back-to-top')) return;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    })
  
    document.addEventListener('DOMContentLoaded', function(){
      let btt = document.querySelector('#wm-back-to-top');
      let body = document.body;
      body.append(btt);
      if (btt?.closest('.sqs-block-content')){
        btt.closest('.sqs-block-content').style.display = 'inline';
      }
    });
  
    const throttle = (callback, time) => {
      if (throttlePause) return;
  
      throttlePause = true;
      setTimeout(() => {
        callback();
        throttlePause = false;
      }, time);
    };
  
    const checkPos = () => {
      let pos = document.documentElement.scrollTop,
          revealHeight = window.innerHeight * 0.1,
          bttButton = document.querySelector('#wm-back-to-top');
      if (pos >= revealHeight) {
        bttButton.classList.add('show');
      } else {
        bttButton.classList.remove('show');
      }
    }
  
    window.addEventListener("scroll", () => {
      throttle(checkPos, 200);
    });
    window.addEventListener('DOMContentLoaded', checkPos)
  }());


  useEffect(() => {
    fetchAllOrders();
},[])


  return (
    <div className='order add'>
      <h3>Order Details</h3>
      <div className="order-list">
        {orders.map((order,index) => (
          <div key={index} className='order-item' >
            <img src={assets.parcel_icon} alt="" />
            <div>
              <p className="order-item-food">
                {order.items.map((item,index) => {
                  if (index===order.items.length-1) {
                     return item.name + "x" + item.quantity
                  }
                  else {
                    return item.name + "x" + item.quantity + ","
                  }
                })}
              </p>
              <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
              <div className="order-item-address">
                <p>{order.address.street + ","}</p>
                <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div>
              <p className='order-item-phone'>{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length}</p>
            <p>₹{order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
              <option value = "Food Processing">Food Processing</option>
              <option value = "Out For Delivery">Out For Delivery</option>
              <option value = "Delivered">Delivered</option>
            </select>
            </div>
        ))}
      </div>
      <button id="wm-back-to-top">
  <div class="btt-background"></div>
  <div class="icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" role="img" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Angle Up</title>
      <path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-width="2" d="M4 42 l28 -26 L60 42" stroke-linejoin="round" stroke-linecap="round"></path>
    </svg>
  </div>
</button>
    </div>
  )
}

export default Orders

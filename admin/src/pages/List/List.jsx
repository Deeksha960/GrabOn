import React, { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({url}) => {
  
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error!");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList(); 
    if (response.data.success) {
      toast.success(response.data.message)
    }
    else {
      toast.error("Error!")
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
    fetchList();
  }, []);

  
  return (
    <div className="List add flex-col">
      <p className="Food">Foods</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>₹{item.price}</p>
            
              <p onClick={()=>removeFood(item._id)} className='cursor'>X</p>
              
              </div>
          )
          
        })}
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
    
  );
};

export default List;

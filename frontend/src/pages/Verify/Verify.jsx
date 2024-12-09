import React, { useContext, useEffect } from "react";
import "./Verify.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

const Verify = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  const { url } = useContext(StoreContext);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      window.setTimeout(function () {
        navigate("/myorders");
      }, 5000);
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="verify">
      <div className="order">
        <img src={assets.order_icon} alt="" />
      </div>
      <div className="spinner">
        <img src={assets.success_icon} alt="" />
      </div>
      <div className="contents">
        <h2>Payment Recieved</h2>
        <p>
          Order has been Placed <br />
          Successfully!!{" "}
        </p>
      </div>
    </div>
  );
};

export default Verify;

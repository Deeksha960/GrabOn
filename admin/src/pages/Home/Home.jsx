import React from "react";
import "./Home.css";
import { assets } from "../../assets/assets";

const Home = () => {
  return (
    <div className="content">
      <img src={assets.bg_img} alt="" />
      <h2>
        Hi, Admin <br /> Welcome Back!!!{" "}
      </h2>
      <p>
        To get started, navigate through the menu on the left to explore various
        sections.
        <br /> Whether you're looking to update products or remove, <br />
        check on order details or food list, all the sections you need are right
        at your fingertips.
        <br /> Your role as an administrator is crucial in maintaining a
        seamless experience for all users, <br />
        and this dashboard is designed to facilitate that effectively.
      </p>
    </div>
  );
};

export default Home;

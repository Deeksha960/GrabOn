import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { StoreContext } from "../../Context/StoreContext";


const Navbar = ({setShowLogin}) => {
   
  const [menu, setMenu] = useState("Menu");


  const { getTotalCartItems, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }


  return (
    <div className="navbar">
     <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}><img src={assets.home_icon} alt=""/>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}> <img className="menuu" src={assets.hum_icon} alt="" /> Menu</a>
        <a href='#app-download' onClick={()=>setMenu("Download")} className={menu==="Download"?"active":""}> <img className="down" src={assets.download_icon} alt="" /> Download</a>
        <a href='#footer' onClick={()=>setMenu("Connect")}className={menu==="Connect"?"active":""}> <img className="conn" src={assets.connect_icon} alt="" /> Connect</a>
      </ul>
      <div className="navbar-right">
        
        <div className="search-box">
          <img src={assets.search_icon} alt="" />
            <input type="text" placeholder="Search" required />
            
        </div>
      <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className="nav-cart-count">{ getTotalCartItems()}</div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Signup</button>
          :<div className='navbar-profile'>
           <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={()=>navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
              <hr />
              <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
      </div>}
      </div>
      </div>
  );
};

Navbar.propTypes = { setShowLogin: PropTypes.string.isRequired, };

export default Navbar;




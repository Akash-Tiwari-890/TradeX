import React , {useState} from "react";
import {Link } from "react-router-dom";

const Menu = () => {

    const [selctedMenu , setSelectedMenu] = useState(0);
        const [isProfileDropDownOpen , setProfileDropDownOpen] = useState(false);


        const handleMenuClick=(index)=>{
            selctedMenue(index);
        };

        const handleProfileClick=(index)=>{
             setProfileDropDownOpen(!isProfileDropDownOpen);
        };


        const menuClass = "menu";
        const activeMenuClass = "menu selected";
  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style = {{textDecoration : "none"}} to="/"  onClick={()=>handleMenuClick(0)}> <p className={selctedMenu===0 ? activeMenuClass : menuClass}>Dashboard</p></Link>
           
          </li>
          <li>
            <Link style = {{textDecoration : "none"}} to="/orders"  onClick={()=>handleMenuClick(1)}> <p className={selctedMenu===1? activeMenuClass : menuClass}>Orders</p></Link>
           
          </li>
          <li>

              <Link style = {{textDecoration : "none"}} to="/holdings"  onClick={()=>handleMenuClick(2)}> <p className={selctedMenu===2? activeMenuClass : menuClass}>Holdings</p></Link>
            
            
          </li>
          <li>
              <Link style = {{textDecoration : "none"}} to="/positions"  onClick={()=>handleMenuClick(3)}> <p className={selctedMenu===3? activeMenuClass : menuClass}>Positions</p></Link>
          </li>
          <li>
               <Link style = {{textDecoration : "none"}} to="/funds"  onClick={()=>handleMenuClick(4)}> <p className={selctedMenu===4? activeMenuClass : menuClass}>Funds</p></Link>
          </li>
          <li>
              <Link style = {{textDecoration : "none"}} to="/apps"  onClick={()=>handleMenuClick(5)}> <p className={selctedMenu===5? activeMenuClass : menuClass}>Apps</p></Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
       
      </div>
    </div>
  );
};

export default Menu;
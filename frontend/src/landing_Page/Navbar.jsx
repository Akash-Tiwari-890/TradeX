import React, { useInsertionEffect } from 'react';
import {Link} from "react-router-dom"
function Navbar() {
    return (

      
<nav className="navbar navbar-expand-lg bg-light border-bottom" style={{backgroundColor:"#FFF"}}>
  <div className="container p-2">
    <Link className="navbar-brand fs-2 fw-bold "  style={{color : "#387ed1"}}  to="/" >Trade x <i className="fa-solid fa-arrow-trend-up" style={{color: "#387ed1"}}></i></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      <form className="d-flex" role="search">
         <ul className="navbar-nav mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="signup">SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="about">About</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link" to="product">Product</Link>
        </li>

         <li className="nav-item">
          <Link className="nav-link" to="pricing">Pricing</Link>
        </li>
          <li class="nav-item">
          <Link class="nav-link" to="support">Support</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="login">Login</Link>
        </li>
        
    
      </ul>
      </form>
    </div>
  </div>
</nav>
     
       
     );
}

export default Navbar;
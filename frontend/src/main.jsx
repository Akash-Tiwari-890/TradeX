import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './landing_Page/home/HomePage';

import {BrowserRouter , Routes , Route}  from  "react-router-dom";
import Signup from './landing_Page/signup/Signup';
import AboutPage from './landing_Page/about/AboutPage';
import PricingPage from './landing_Page/pricing/PricingPage';
import SupportPage from './landing_Page/support/SupportPage';
import Navbar from './landing_Page/Navbar';
import Footer from './landing_Page/Footer';
import NotFound from './landing_Page/NotFound';
import ProductPage from './landing_Page/products/ProductPage';
import Login from './landing_Page/Login/Login';
createRoot(document.getElementById('root')).render(
   <BrowserRouter>
    <Navbar/>
   <Routes>
    <Route path="/" element={<HomePage></HomePage>}></Route>
    <Route path="/signup" element={<Signup></Signup>}></Route>
     <Route path="/about" element={<AboutPage></AboutPage>}></Route>
     <Route path="/pricing" element={<PricingPage></PricingPage>}></Route>
     <Route path="/product" element={<ProductPage/>}></Route>
     <Route path="/support" element={<SupportPage></SupportPage>}></Route>
          <Route path="/login" element={<Login/>}></Route>
     <Route path="/*" element={<NotFound/>}></Route>

     
     
 
   </Routes>

   <Footer/>
   </BrowserRouter>
);

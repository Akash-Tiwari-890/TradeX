import React from 'react';

import{useState} from 'react';


import axios from "axios";


function Signup() {

    let[formData , setFormData] = useState({
        username : "",
        email:"",
        password:""
    })


function handleInput(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value 
        }));
    }
    

   async  function handdleSubmit(event){
        event.preventDefault();

      try {
        const res = await axios.post(
            "http://localhost:8010/users/Signup", 
            formData, 
            { withCredentials: true } 
        );

        if (res.data.success) {
           
            window.location.href = "http://localhost:5174"; 
        }
    } catch (err) {
        alert(err.response?.data?.message || "Signup Failed!");
    }

     

    };


    return (
        <div className="container ">
            <div className="row justify-content-center align-items-center text-cenetr mt-5">
               <div className="text-center mt-2">
                <h1>Welcome to zerodha</h1>
               </div>
           
                <div className="col-6 mt-5">
                  <form onSubmit={handdleSubmit}>
                   Enter user name <input placeholder="enetr the details" type="text"  id="username" value={formData.username}  name="username"  onChange={handleInput} className="form-control"></input><br></br>
                   Enter Email <input placeholder="Enter the email" type="email"  id="email" name="email" onChange={handleInput} value={formData.email} className="form-control"></input><br></br>
                    Enter passowrd <input placeholder="enetr the password" type="password"  id="password"   onChange={handleInput}  name="password" value={formData.password}  className="form-control"></input><br></br>
                  <button className="btn btn-primary">Register Go to dashBoard</button>
            </form>
        </div>
        </div>
        </div>

    )
}

export default Signup;
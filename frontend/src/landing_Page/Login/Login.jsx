import React, { useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8010";
const DASHBOARD_URL = import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

try {
      
      const res = await axios.post(
          `${API_URL}/users/Login` ,
        { email, password },
        { withCredentials: true }
      );

      
      if (res.data.success || res.data.sucess) {
        
        window.location.href = DASHBOARD_URL
      }
    } catch (err) {
      setErrorMsg(err.response?.data?.message || "Login Failed!");
    }
  };

  return (
    <div className="container mt-5">

    <div  className="row justify-content-center align-items-center text-cenetr mt-5">

      <div className="text-center mt-3">
      <h2>Zerodha Login</h2>
      </div>

      {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
    <div className="col-6 mt-5">
      <form onSubmit={handleLogin}>
        
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-control"
          /><br></br>
       
    

           passowrd
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-control"
          /><br></br>
    
     
        <button type="submit"  className="btn btn-primary">Login to Dashboard</button>
      </form>
     </div>
      </div>  
    </div>

  );
}
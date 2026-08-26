import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const BACKEND_URL = import.meta.env.VITE_API_URL || "http://localhost:8010";
const FRONTEND_URL = import.meta.env.VITE_FRONTEND_URL || "http://localhost:5173";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/verifyToken`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data && res.data.success) {
          setIsAuthenticated(true);
        } else {
          window.location.replace(`${FRONTEND_URL}/login`);
        }
      })
      .catch((err) => {
        console.error("Auth verification failed:", err);
        window.location.replace(`${FRONTEND_URL}/login`);
      });
  }, []);

  if (!isAuthenticated) return null;

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
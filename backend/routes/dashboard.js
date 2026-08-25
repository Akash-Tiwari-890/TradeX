const express = require("express");

const router = express.Router();


const dashboardController  =   require("../controllers/dashboard.js");



router.get("/dashboard/getStock" , dashboardController.getStock);



router.get("/dashboard/allPositions" , dashboardController.allposition );


router.get("/dashboard/allHoldings", dashboardController.allholdings);





router.post("/dashboard/newOrder"  ,dashboardController.neworder  );




module.exports =   router;
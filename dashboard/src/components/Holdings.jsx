import React from "react";
import {useState , useEffect} from "react";
import axios, { all } from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {


  const[allHoldings , setallHoldings]= useState([]);
    console.log(allHoldings);
  useEffect(()=>{

    axios.get("http://localhost:8010/dashboard/allHoldings" , {withCredentials:true}).then((res)=>{
       setallHoldings(res.data);
       
      
    })

  }, []);




  const labels = allHoldings.map((subArray)=>subArray["name"]);
 const data = {
  labels,
  datasets:[
    {
      label : "stock.name",
      data : allHoldings.map((stock)=>stock.price),
      backgroundColor : "rgb(255 , 99 , 132 , 0.5)",
      
    },
  ],
 };
  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur.val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock , index)=>{

            const profitClass = stock.isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return(

        <tr key={index}>
            <td>{stock.name}</td>
            <td>{stock.qty}</td>
            <td>{stock.avg.toFixed(2)}</td>
            <td>{stock.price.toFixed(2)}</td>
            <td>{stock.currVal.toFixed(2)}</td>
            <td id={profitClass}>{stock.pnl.toFixed(2)}</td>
            <td  className={profitClass}>{stock.net.toFixed(2)}</td>
            <td className={dayClass}>{stock.day}</td>
          </tr>
            )
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph  data={data}/>
    </>
  );
};

export default Holdings;

const {HoldingsModel} = require('../model/HoldingModel');
const {PositionsModel} = require('../model/PositionsModel');
const{ OrdersModel} = require('../model/OrderModel');
const YahooFinance = require("yahoo-finance2").default;
const yahooFinance = new YahooFinance();

let cachedStocks = null;
let lastFetchTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const fallbackStocks = [
  { symbol: "INFY.NS", regularMarketPrice: 1540.50, regularMarketChangePercent: 1.25 },
  { symbol: "TCS.NS", regularMarketPrice: 3820.00, regularMarketChangePercent: -0.45 },
  { symbol: "RELIANCE.NS", regularMarketPrice: 2950.10, regularMarketChangePercent: 0.85 },
  { symbol: "HDFCBANK.NS", regularMarketPrice: 1460.00, regularMarketChangePercent: -1.10 },
  { symbol: "WIPRO.NS", regularMarketPrice: 480.30, regularMarketChangePercent: 0.30 }
];

module.exports.getStock = async (req, res) => {
  const currentTime = Date.now();

  // Agar cache valid hai toh Yahoo ko call hi mat karo
  if (cachedStocks && currentTime - lastFetchTime < CACHE_DURATION) {
    return res.status(200).json(cachedStocks);
  }

  const symbols = ["INFY.NS", "TCS.NS", "RELIANCE.NS", "HDFCBANK.NS", "WIPRO.NS"];

  try {
    const stockPromises = symbols.map((symbol) =>
      yahooFinance.quote(symbol).catch(() => null)
    );

    const results = await Promise.all(stockPromises);
    const validData = results.filter((item) => item !== null);

    if (validData.length > 0) {
      cachedStocks = validData.map((stock) => ({
        symbol: stock.symbol,
        regularMarketPrice: stock.regularMarketPrice || 0,
        regularMarketChangePercent: stock.regularMarketChangePercent || 0,
      }));
      lastFetchTime = Date.now();
      return res.status(200).json(cachedStocks);
    }

    return res.status(200).json(cachedStocks || fallbackStocks);
  } catch (error) {
    return res.status(200).json(cachedStocks || fallbackStocks);
  }
};

module.exports.allholdings =   async (req, res) => {

    let allHoldings = await HoldingsModel.find({});

    let updatedHolding = [] ;


    for(let items of allHoldings){
      console.log(items);

       // ✅ Correct Template Literal
      const symbol = `${items.name.trim()}.NS`;
    
      const quote = await yahooFinance.quote(symbol);

      const qty = items.qty
      const liveLtp = quote.regularMarketPrice;
      const buyAvg = items.avg
      const curVal = qty * liveLtp;
      const investment = qty * buyAvg;
      const pnl = curVal  - investment;

      const netPct =(pnl / investment)*100;
      const day  = quote.regularMarketChangePercent;

      updatedHolding.push({
        _id :  items._id,

        name : items.name,

        qty : qty,

        avg : items.avg,

        price : liveLtp,
        currVal : Number(curVal.toFixed(2)),
        pnl : Number(pnl.toFixed(2)),
        net : netPct,

        day : day.toFixed(2),
   
        isProfit :  pnl < 0 ,

        isLoss : day < 0




      })
      
    }

    res.json(updatedHolding);
  
  
};




module.exports.neworder = async(req, res)=>{
      let newOrder = new OrdersModel({

    name : req.body.name,
    qty : req.body.qty , 
    price : req.body.price,
    mode : req.body.mode,

      });
     await newOrder.save();
    

      if(req.body.mode=="BUY"){
        let existingHolding = await HoldingsModel.findOne({name: req.body.name});
        console.log(existingHolding);
        if(existingHolding){
         let totalQty = existingHolding.qty + Number(req.body.qty);
          let totalCost = (existingHolding.avg * existingHolding.qty) + (Number(req.body.price) * Number(req.body.qty));
          existingHolding.qty = totalQty;
        existingHolding.avg = totalCost / totalQty;
        existingHolding.price = Number(req.body.price);
        
        await existingHolding.save();
        }
      else {
        let newHolding = new HoldingsModel({
          name: req.body.name,
          qty: Number(req.body.qty),
          avg: Number(req.body.price),
          price: Number(req.body.price),
          mode :  req.body.mode,
         

        });

        await newHolding.save();
      }
    }
 



};




module.exports.allposition =  async(req,res)=>{
          let alllPositions = await PositionsModel.find({});
          res.json(alllPositions);


}
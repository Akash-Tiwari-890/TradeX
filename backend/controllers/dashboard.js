
const {HoldingsModel} = require('../model/HoldingModel');
const {PositionsModel} = require('../model/PositionsModel');
const{ OrdersModel} = require('../model/OrderModel');
const YahooFinance = require("yahoo-finance2").default;
const yahooFinance = new YahooFinance();


module.exports.getStock =  async(req , res)=>{
  const symbols = ['INFY.NS', 'TCS.NS', 'RELIANCE.NS', 'WIPRO.NS' , 'HCLTECH.NS', 'NTPC.NS'];



    const quote = await yahooFinance.quote(symbols);
  
    res.json(quote);
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
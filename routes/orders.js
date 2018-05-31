const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Orders = require('../models/orders');
const tempOrders=require('../models/tempOrders');
const Menu=require('../models/Menu');
const User=require('../models/user');
// Register
router.post('/add', (req, res, next) => {
    console.log(req.body);
  let order = new Orders({
    email:req.body.userEmail,
    orders:req.body.orders,
    tablenumber:req.body.tableno,
    total:req.body.total
  });

  Orders.addOrder(order, (err, order) => {
    if(err){
      res.json({success: false, msg:'Failed to Add',order:order});
    } else {
      res.json({success: true, msg:'order Added',order:order});
    }
  });
  User.addOrder(order.email,order,(err,status)=>
{
if(err){
  res.json({success: false, msg:'Failed to Add'});
}
});

  for(var i=0;i<req.body.orders.length;i++)
  {
   //console.log(req.body.orders[i].foodname); 
   if(req.body.orders[i].rating>0)
   {
    Menu.addRating(req.body.orders[i].foodname,req.body.orders[i].rating,(err,msg)=>
    {
  
      if(err){ res.json({success: false, msg:'Failed to update rating'})}
    });
   }
  Menu.UpdateCount(req.body.orders[i].foodname,req.body.orders[i].Count,(err,msg)=>
  {

    if(err){ res.json({success: false, msg:'Failed to update count'})}
  });
  }
});

router.post('/addtemp',(req,res,next)=>{
    let order = new Orders({
    email:req.body.userEmail,
    time:req.body.timeStamp,
    orderId:req.body.orderId,
    orders:req.body.orders
  });
  tempOrders.addOrder(order, (err, food) => {
    if(err){
      res.json({success: false, msg:'Failed to Add'});
    } else {
      res.json({success: true, msg:'order Added'});
    }
  });
});

router.get('/LoadOrders', (req, res, next) => {

Orders.Load((err,orders)=>{
  if(err){
    res.json({success: false, msg:'Failed to load'});
  } else {
    res.json({success :true,orders:orders});
  }
});


});

router.post('/LoadOrdersByEmail', (req, res, next) => {

  Orders.getOrdersByEmail(req.body.email,(err,order)=>{
    if(err){
      res.json({success: false, msg:'Failed to load'});
    } else {
      res.json({success :true,orders:order});
    }
  });
  
  
  });


module.exports = router;

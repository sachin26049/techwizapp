const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Orders = require('../models/orders');
const tempOrders=require('../models/tempOrders');

// Register
router.post('/add', (req, res, next) => {
    console.log(req.body);
  let order = new Orders({
    email:req.body.userEmail,
    orders:req.body.orders
  });

  Orders.addOrder(order, (err, food) => {
    if(err){
      res.json({success: false, msg:'Failed to Add'});
    } else {
      res.json({success: true, msg:'order Added'});
    }
  });
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

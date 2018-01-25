const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Menu = require('../models/Menu');
const type = require('../models/type');

// Register
router.post('/add', (req, res, next) => {
  let newFood = new Menu({
    name: req.body.name,
    price: req.body.price,
    des: req.body.des,
    type:req.body.type
  });

  Menu.addFood(newFood, (err, food) => {
    if(err){
      res.json({success: false, msg:'Failed to Add'});
    } else {
      res.json({success: true, msg:'Food Added'});
    }
  });
});


router.get('/LoadMenu', (req, res, next) => {

Menu.Load((err,menu)=>{
  if(err){
    res.json({success: false, msg:'Failed to load'});
  } else {
    res.json({success :true,menu:menu});
  }
});


});

router.get('/LoadType', (req, res, next) => {

  type.Load1((err,type)=>{
    if(err){
      res.json({success: false, msg:'Failed to load'});
    } else {
      res.json({success :true,type:type});
    }
  });
  
  
  });


module.exports = router;

const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Menu = require('../models/Menu');

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
    res.json(menu);
  }
});


});




module.exports = router;

const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Menu = require('../models/Menu');
const type = require('../models/type');
const Recommend = require('../models/recommend');

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
router.post('/delete', (req, res, next) => {
  let name= req.body.name;
    

  Menu.Delete(name, (err, food) => {
    if(err){
      res.json({success: false, msg:'Failed to delete'});
    } else {
      res.json({success: true, msg:'Food deleted'});
    }
  });
});

router.put('/update', (req, res, next) => {
  let name= req.body.name;
  let newFood = new Menu({
    name: req.body.name,
    price: req.body.price,
    des: req.body.des,
    type:req.body.type
  });


  Menu.Update(name,newFood,{}, (err, food) => {
    if(err){
      res.json({success: false, msg:'Failed to delete'});
    } else {
      res.json({success: true, msg:'Food deleted'});
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


router.get('/RecommendedItems',(req,res,next)=>{
  console.log('hfigh'+req);
  Recommend.LoadItems(req.body.email,(err,rec)=>{
    if(err){
      res.json({success: false, msg:'Failed to load'});
    } else {
      res.json({success :true,rec:rec});
      console.log(req.body.email);
    }
});
console.log('gyudtydfgui');
});

module.exports = router;

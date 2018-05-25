const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Offer = require('../models/offer');
const type = require('../models/type');
const recommend=require('../models/recommend');
const collabrecommend=require('../models/collabrecommend');
// Register
router.post('/add', (req, res, next) => {
  let newFood = new Offer({
    name: req.body.name,
    price: req.body.price
  });

  Offer.addFood(newFood, (err, food) => {
    if(err){
      res.json({success: false, msg:'Failed to Add'});
    } else {
      res.json({success: true, msg:'Food Added'});
    }
  });
});



router.post('/delete', (req, res, next) => {
  let name= req.body.name;
    

  Offer.Delete(name, (err, food) => {
    if(err){
      res.json({success: false, msg:'Failed to delete'});
    } else {
      res.json({success: true, msg:'Food deleted'});
    }
  });
});


router.put('/update', (req, res, next) => {
  let name= req.body.name;
  let newFood = new Offer({
    name: req.body.name,
    price: req.body.price
   });


  Offer.Update(name,newFood,{}, (err, food) => {
    if(err){
      res.json({success: false, msg:'Failed to delete'});
    } else {
      res.json({success: true, msg:'Food deleted'});
    }
  });
});


router.get('/LoadOffer', (req, res, next) => {

Offer.Load((err,menu)=>{
  if(err){
    res.json({success: false, msg:'Failed to load'});
  } else {
    res.json({success :true,menu:menu});
  }
});


});


module.exports = router;

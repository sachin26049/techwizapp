const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Menu = require('../models/Menu');
const type = require('../models/type');
const recommend=require('../models/recommend');
const collabrecommend=require('../models/collabrecommend');
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

router.post('/addType', (req, res, next) => {
  let newFood = new type({
   
    type:req.body.type
  });

  type.addType(newFood, (err, food) => {
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

router.post('/deleteType', (req, res, next) => {
  let name= req.body.type;
    

  type.Delete(name, (err, food) => {
    if(err){
      res.json({success: false, msg:'Failed to delete'});
    } else {
      res.json({success: true, msg:'Type deleted'});
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


router.get('/Sort', (req, res, next) => {

  Menu.Sort((err,menu)=>{
    if(err){
      res.json({success: false, msg:'Failed to load'});
    } else {
      res.json({success :true,menu:menu});
    }
  });

  


});
router.post('/LoadRecommendation', (req, res, next) => {
  var email=req.body.email;
  console.log(email);
  recommend.LoadItems(email,(err,rec)=>{
    if(err){
      res.json({success: false, msg:'Failed to load'});
    } else {
      res.json({success :true,recommendation:rec});
    }
  });
  
  
  });

  router.post('/LoadCollabRecommendation', (req, res, next) => {
    var email=req.body.email;
    console.log(email);
    collabrecommend.LoadItems(email,(err,rec)=>{
      if(err){
        res.json({success: false, msg:'Failed to load'});
      } else {
        res.json({success :true,recommendation:rec});
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

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// food Schema
const MenuSchema = mongoose.Schema({
  price: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  des:{
    type: String
  },
  keywords:{
    type: [String]
  },
  count:{
    type :Number,
    default:0
  },
  ratingCount:{
    type :Number,
    default:0
  },
  rating:{
    type :Number,
    default:0
  }



},{ collection : 'menu' });


const Menu = module.exports = mongoose.model('Menu', MenuSchema);

module.exports.getFoodById = function(id, callback){
  Menu.findById(id, callback);
}

module.exports.getFoodByFoodname = function(name, callback){
  const query = {name: name}
  Menu.findOne(query, callback);
}

module.exports.addFood = function(newFood, callback){

      newFood.save(callback);
}

module.exports.Load =function(callback)
{
Menu.find({},null,{sort : '-price'},callback);
//console.log(callback);
}

module.exports.Delete =function(name,callback)
{
Menu.deleteOne({ "name" :name } ,callback);
//console.log(callback);
}

module.exports.Update =function(name,newFood,options,callback)
{ 
  var update={
    type: newFood.type,
    name: newFood.name,
    price: newFood.price,
    des:newFood.des

  }
Menu.findOneAndUpdate({ "name" :name } ,update,options,callback);
//console.log(callback);
}

module.exports.UpdateCount =function(name,count,callback)
{ 
  console.log("in menu");
  console.log(name);
  const query = {"name": name}
  
  var old=Menu.findOne(query, (err,food)=>
  {
    console.log(err);
    console.log(food);
    food.count+=count;
    food.save(callback);
  });

  //console.log(callback);
}
module.exports.addRating =function(name,rating,callback)
{ 
  console.log("in menurating");
  console.log(name);
  const query = {"name": name}
  
  var old=Menu.findOne(query, (err,food)=>
  {
    console.log(err);
    console.log(food);
    food.rating+=rating;
    food.ratingCount++;
    food.save(callback);
  });

  //console.log(callback);
}


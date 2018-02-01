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
Menu.find({},callback);
//console.log(callback);
}

module.exports.Delete =function(name,callback)
{
Menu.deleteOne({ "name" :name } ,callback);
//console.log(callback);
}


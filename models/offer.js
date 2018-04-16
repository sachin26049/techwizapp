const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// food Schema
const OfferSchema = mongoose.Schema({
  price: {
    type: String,
    required: true
  },
  
  name: {
    type: String,
    required: true
  }
  }
,{ collection : 'offer' });


const Offer = module.exports = mongoose.model('Offer', OfferSchema);

module.exports.getFoodById = function(id, callback){
  Offer.findById(id, callback);
}

module.exports.getFoodByFoodname = function(name, callback){
  const query = {name: name}
  Offer.findOne(query, callback);
}

module.exports.addFood = function(newFood, callback){

      newFood.save(callback);
}

module.exports.Load =function(callback)
{
Offer.find({},callback);
//console.log(callback);
}

module.exports.Delete =function(name,callback)
{
Offer.deleteOne({ "name" :name } ,callback);
//console.log(callback);
}

module.exports.Update =function(name,newFood,options,callback)
{ 
  var update={

    name: newFood.name,
price: newFood.price,

  }
Offer.findOneAndUpdate({ "name" :name } ,update,options,callback);

}

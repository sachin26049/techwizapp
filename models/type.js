const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

const TypeSchema = mongoose.Schema({
    type: {
      type: String,
      required: true
    }
  },{ collection : 'type' });

  const Type = module.exports = mongoose.model('type',TypeSchema);
module.exports.Load1 =function(callback)
{
Type.find({},callback);
//console.log(callback);
}

module.exports.Delete =function(name,callback)
{
Type.deleteOne({ "type" :name } ,callback);
//console.log(callback);
}

module.exports.addType = function(newFood, callback){

  newFood.save(callback);
}

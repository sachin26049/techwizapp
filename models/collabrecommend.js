const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
//const menu= require('./menu');

// food Schema
const collabRecommendSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  items:[{
      name:{
          type:String,
          required:true
      },
      type:{
        type:String,
        required:true
      },
      description:{
        type:String,
        required:true
      },
      price:{
          type:String,
          required:true
      }
}]
},{ collection : 'collabrecommend' });


const collabRecommend = module.exports = mongoose.model('collabrecommend', collabRecommendSchema);

module.exports.getRecommendedFoodByUserId = function(id, callback){
  collabRecommend.findById(id, callback);
}


module.exports.LoadItems =function(email,callback)
{
collabRecommend.find({"email":email},callback);
//console.log(callback);
}

/*module.exports.updateIndex =function(callback)
{
Recommend.find(x);
console.log(x);
for(var i=0;i<x.length;i++)
{ 

}
}*/




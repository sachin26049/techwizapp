const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');


// food Schema
const RecommendSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  items:[{
    category:[{
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
      rank:{
        type:String,
        required:true
      },
      price:{
          type:String,
          required:true
      }
    }]
}]
},{ collection : 'recommend' });


const Recommend = module.exports = mongoose.model('recommend', RecommendSchema);

module.exports.getRecommendedFoodByUserId = function(id, callback){
  Recommend.findById(id, callback);
}


module.exports.LoadItems =function(email,callback)
{
Recommend.find({"email":email},callback);
//console.log(callback);
}




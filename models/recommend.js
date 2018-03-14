const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
//const menu= require('./menu');

// food Schema
const RecommendSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  items:[{
    category:{
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
<<<<<<< HEAD
    }]
=======
    }
>>>>>>> 8bd1da726d24031e2ba1c962d65e6ab59ea8d25d
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

<<<<<<< HEAD
=======
/*module.exports.updateIndex =function(callback)
{
Recommend.find(x);
console.log(x);
for(var i=0;i<x.length;i++)
{ 

}
}*/

>>>>>>> 8bd1da726d24031e2ba1c962d65e6ab59ea8d25d



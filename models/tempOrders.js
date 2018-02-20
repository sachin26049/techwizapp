const mongoose = require('mongoose');
const config = require('../config/database');

// order Schema
const temporderSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  timestamp:{ type : Date, default: Date.now },
  orderId:Number,
  orders:[{
      foodname:{
        type :String,
        required:true
      },
      Count :{
        type : Number,
        required:true
      }
  }]
},{ collection : 'tempOrders' });


const temporders = module.exports = mongoose.model('tempOrders', temporderSchema);

module.exports.getOrderById = function(id, callback){
  temporders.findById(id, callback);
}

module.exports.getOrdersByEmail = function(email, callback){
  const query = {email: email}
  temporders.find(query, callback);
}

module.exports.addOrder = function(order, callback){

    order.save(callback);
}

module.exports.Load =function(callback)
{
temporders.find({},callback);
//console.log(callback);
}

/*module.exports.Delete =function(name,callback)
{
Menu.deleteOne({ "name" :name } ,callback);
//console.log(callback);
}
*/

const mongoose = require('mongoose');
const config = require('../config/database');

// order Schema
const orderSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  timestamp:{ type : Date, default: Date.now },
  tablenumber:{
    type :String,
    required:true
  },
  orders:[{
      foodname:{
        type :String,
        required:true
      },
      Count :{
        type : Number,
        required:true
      },
      rating:{
        type:Number,
        required:true
      }
  }],
  total:{
    type:Number,
    required:true
  },
  feedback:{
    type:String,
    required:true
  }
},{ collection : 'orders' });


const orders = module.exports = mongoose.model('Orders', orderSchema);

module.exports.getOrderById = function(id, callback){
  orders.findById(id, callback);
}

module.exports.getOrdersByEmail = function(email, callback){
  const query = {email: email}
  orders.find(query, callback);
}

module.exports.addOrder = function(order, callback){

      order.save(callback);
      // console.log(order);

}

module.exports.Load =function(callback)
{
orders.find({},callback);
//console.log(callback);
}

/*module.exports.Delete =function(name,callback)
{
Menu.deleteOne({ "name" :name } ,callback);
//console.log(callback);
}
*/

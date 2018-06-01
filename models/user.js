const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// User Schema
const UserSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  pre1:{
    type: String,
    required: true
  },
  pre2:{
    type: String,
    required: true
  },
  pre3:{
    type: String,
    required: true
  },
  orders:[
    {
      timestamp:{ type : Date, default: Date.now },
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
    } 
    }]
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback){
  const query = {email:email}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  var query={email:newUser.email};
  User.find(query,(err,user)=>{;
  if(user.length)
  {
    console.log('email found');
    callback('email exists',null);
  }
  else
  {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
  }
});
}

module.exports.addOrder =function(email,order,callback)
{ 
  console.log("in user");
  console.log(email);
  const query = {"email": email}
  
  var old=User.findOne(query, (err,user)=>
  {
    console.log(err);
    console.log(user);
    user.orders.push(order);
    user.save(callback);
  });

  //console.log(callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}

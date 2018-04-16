const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const tempOrders=require('./models/tempOrders');
const recommend=require('./models/recommend');
// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();




//routing
const users = require('./routes/users');

const menu=require('./routes/Menu');
const orders=require('./routes/orders');

const offer = require('./routes/offer');
//update index
//recommend.updateIndex();
// Port Number
const port = 3000;

// CORS Middleware
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

//using respective files in routes
app.use('/users', users);

app.use('/menu',menu);
app.use('/orders',orders);

app.use('/offer',offer);


// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

// Start Server
server=app.listen(port, () => {
  console.log('Server started on port '+port);
});

//setup socket 

var io = require('socket.io').listen(server);
  var chefid;
  var idList=new Array();
    // socket io connection funtions
  io.on('connection', function(socket){
    //console.log(socket.id+"  "+'connected');
      socket.on("chef",function(msg){
        chefid=socket.id;
        console.log("chef  "+'connected');
      });

      socket.on("user",function(msg){
          console.log(msg+"  "+'connected');
          let p={
            "email":msg,
            "socket":socket.id
          };
          var x=idList.find(function(element){
            return element.email==p.email;
          });
          if(x)
          {
            //console.log(y);
            //var y=idList.findIndex(x);
            x.socket=socket.id;
          }
          else
           idList.push(p);
          /*var x=idList.find(function(element){
            return element.email==msg;
          });
          console.log("find:"+x.email+"  "+x.socket);*/
      });

      socket.on("orderStatus",function(msg){
          var x=idList.find(function(element){
            return element.email==msg.userEmail;
          });
        
          //console.log("find:"+x.email+"  "+x.socket+" ");
          //console.log(msg);
          if(x)
          {
            console.log(msg);
            console.log("find:"+x.email+"  "+x.socket+" ");
            io.to(x.socket).emit("orderStatus",msg);
          }
      });

      socket.on("orderDeliverd",function(msg){
          var x=idList.find(function(element){
              return element.email==msg.email;
          });
          if(x)
          {
            console.log(msg);
            console.log("find:"+x.email+"  "+x.socket+" ");
            io.to(x.socket).emit("orderDeliverd",msg);
          }
      });


      socket.on('placeOrder',function(msg){
        console.log(msg);
        io.to(chefid).emit("order",msg);
        let order = new tempOrders({
          email:msg.userEmail,
          time:msg.timeStamp,
          orderId:msg.orderId,
          orders:msg.orders
        });
        tempOrders.addOrder(order, (err, food) => {
          if(err){
           console.log({success: false, msg:'Failed to Add'});
          } else {
            console.log({success: true, msg:'order Added'});
          }
        });
        });
});




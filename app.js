const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

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
// socket io connection funtions
io.on('connection', function(socket){
  console.log(socket.id+"  "+'connected');
  socket.on("chef",function(msg){
    chefid=socket.id;
    console.log("chef  "+'connected');
  });
  socket.on('message',function(msg){
    console.log(msg);
<<<<<<< HEAD
    socket.emit('orders',msg);
=======
    io.to(chefid).emit("order",msg);
>>>>>>> 8cd0a0ce8315fb4872f18bea2260169abb6d5472
    });
});




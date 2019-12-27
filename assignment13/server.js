var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

var schema = mongoose.model('product',
    {
        id: Number,
        product: {
           productid: Number,
           category: String,
           price: Number,
           name: String,
           instock: Boolean
          }
        }
        
);

const connectionURL = "mongodb+srv://yesha_ailani:yesha@inventoryproject-jzew1.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        console.log("Cannot connect"+err);
    });


app.use(bodyParser.json());
app.get();
app.post();
app.put();
app.delete();

app.listen(4000 ,() => {
    console.log("server on 4000 port number"); });
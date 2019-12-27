var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());

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

app.get();
app.post();
app.put();
app.delete();
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();

app.use(bodyParser.json());

var Schema = mongoose.model('product', {
    id : Number,
    product: {
        productid: Number,
        category: String,
        price: String,
        name: String,
        instock: Boolean
    }   
});

var connectionURL = 'mongodb+srv://yesha_ailani:yesha@inventoryproject-jzew1.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    console.log("Mongodb connection established", err);
});

//get
app.get('/product/get/', async (req, res) => {
    try{
    var products = {};
    var data = await Schema.find({});
    data.forEach((value) => {
        products[value.id] = value.product;
    });
    res.send(products);
    }
    catch(error)
    {
        console.log("error while getting data" +error)
    }
}); //get ends

//create
app.post('/product/create/', async (req, res) => {
    try{
        var product = new Schema(req.body);
        await product.save();
        console.log("saved");
        res.sendStatus(200);

    }catch (error) {
        res.sendStatus(500);
    }
}); //create ends

//update starts
app.put('/product/update/:id', async (req, res) => {
    try{
        console.log(req.body)
        await Schema.findOneAndUpdate({id: req.params.id}, req.body);
        res.sendStatus(200);   
    }catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}); //update ends

//delete
app.delete('/product/delete/:id', async (req, res) => {
    try{
    await Schema.findOneAndDelete({id: req.params.id});
    res.sendStatus(200);
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
    }
}); //delete ends

app.listen(4000, () => {
    console.log('server is listening in 4000');
});
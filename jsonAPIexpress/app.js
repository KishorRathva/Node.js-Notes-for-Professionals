const express = require('express');
//USe cors module for enable Cross-origin resources sharing
const cors = require('cors');

var app = express();

app.use(cors()); //for all routes

var port =  process.env.PORT || 8080;

app.get('/',(req,res) => {
    var info = {
        'string_value':'StackOverflow',
        'number_value' :8476
    }
    res.json(info);
    // res.status(200).json(info);
    //or
    // res.send(JSON.stringify({
    //     'string_value':'StackOverflow',
    //     'number_value' :8476
    // }))
})

app.get('/x/*',(req,res) => {
    let data = {
        fullpath : req.originalUrl ,
        param :req.params.user_id,
        query :req.query.field
    }
    res.json(data);
})

app.listen(port ,() => {
    console.log(`Node.js listening on port ${port}`) 
})
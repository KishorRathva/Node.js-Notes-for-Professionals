const express = require('express');
//method to use with http as final callback
const doSomething = require('./doSomething');

const app = express();

app.get('/ping',(req,res) => {
    res.send('pong');
});

app.listen(8080,'localhost');

//Basic routing 
app.get('/routing',(req,res) => {
    res.send('GET method');
});
app.post('/routing',(req,res) => {
    res.send('POST method');
});
app.put('/routing',(req,res) => {
    res.send('PUT method');
});

app.delete('/routing',(req,res) => {
    res.send('DELETE method');
});

//use for all methos of http

// app.use('/routing',(req,res) => {
//     res.send('USE method');
// });

// app.all('/routing',(req,res) => {
//     res.send('ALL method');
// });

app.route('/chain')
    .get((req,res) => {
        res.send('GET method chaining...')
    })
    .post((req,res) => {
        res.send('POST method chaining...')
    })
    .put((req,res) => {
        res.send('PUT method chaining...')
    });
    
 //We also add function to any HTTP method
    myfunction = (req,res) => {
        res.send('This is my function ..');
    }
    app.get('/doSomething',myfunction,doSomething.doSomething);




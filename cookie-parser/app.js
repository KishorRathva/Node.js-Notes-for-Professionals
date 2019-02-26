const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());



app.get('/setcookie',(req,res) => {
    //setting cookies 
    res.cookie('username','john doe' , { maxAge:900000,httpOnly:true });
    return res.send('Cookie has been set');
});

app.get('/getcookie',(req,res) => {
    var username = req.cookies['username'];
    if(username) {
        return res.send(username);
    }
    return res.send('No cookie found');
});
//each request will pass through it
//Custom middleware in Express

app.use((req,res,next) => {
    req.user = 'kishorrathva';
    next(); //it will pass the control to next matching route
});

app.get('/',(req,res) => {
    //Cookies that have not been signed 
    console.log('Cookies: ',req.cookies);
    var user = req.user;
    console.log(user);//kishorathva

    //Cookies that have been signed
    console.log('Signed Cookies:', req.signedCookies);
    return res.send(user);
})

app.listen(3000,() => {
    console.log('Server started on port:3000');
});


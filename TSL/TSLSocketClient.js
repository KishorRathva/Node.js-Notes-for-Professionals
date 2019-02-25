'use strict' ;
var tls = require('tls');
var fs = require('fs');

const PORT = 1337 ;
const HOST = '127.0.0.1';

//pass the certs to the server ans let it know to process even unauthorized certs.

var options ={
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('public-cert.pem'),
    rejectUnauthorized : false
};

var client = tls.connect(PORT, HOST ,options , () => {
    //Check if the authorization worked 
    if(client.authorized) {
        console.log("Connection authorized by a Certification Authority.");
    }else {
        console.log(`Connection not authorized: ${client.authorizationError}`);
    }

    //Send a friendly message 
    client.write("I am client sending you a message.");
});

    client.on("data",(data) => {
        console.log('Received : %s [it is %d bytes long]',data.toString().replace(/(\n)/gm,""),
        data.length);

        //Close the connection after receiving the message 

        client.end();
    });

    client.on('close', () => {
        console.log("connection closed");
    });

    //When an error occures , shoe it .

    client.on('error',(error) => {
        console.error(error);
        //Close the connection after the error occurred .
        client.destroy();
    });
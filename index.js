const express = require('express');
const app = express();




//SUBMIT API
app.post('/submitassignment', (req, res) => {res.send('<html><body>INSIDE SUBMIT API...</body></html>');});


//VIEW API
app.get('/viewassignment', (req, res) => {res.send('<html><body>INSIDE VIEW API...</body></html>');});

//EDIT API 
app.put('/editprofile', (req, res) => {res.send('<html><body>INSIDE EDIT API...</body></html>');});



app.listen(5002, () =>
    console.log('EXPRESS Server Started at Port No: 5002!!!'));

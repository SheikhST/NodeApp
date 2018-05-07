// This example uses Express
const express = require('express');
const app = express();

app.get('/', function(request, response) {
 if (!req.secure) {
   // Present an error to the user
 }
});

app.listen(3000);
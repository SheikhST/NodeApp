const express        = require('express');

const bodyParser     = require('body-parser');
const app            = express();


var stripe = require("stripe")("sk_test_4nIvshjRjLIcWVpXard0woJQ");

// You can find your endpoint's secret in your webhook settings
const endpointSecret = 'whsec_XIDTUPVYfi9inyVqoP15AvjA1cEugAYy';



// Retrieve the raw body as a buffer and match all content types
// app.use(require('body-parser').raw({type: '*/*'));
app.use(require('body-parser');

app.post('/webhook/example', (req, res) => {
  let sig = req.headers["stripe-signature"];

  try {
    let event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    // Do something with event
  }
  catch (err) {
    res.status(400).end()
  }

  // Return a response
  res.json({received: true});
});

app.listen(8000, () => console.log('Running on port 8000'));

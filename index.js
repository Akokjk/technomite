const express = require('express');

const app = express();

app.get('/', (req, res)=> {
  res.send({bye: 'buddy'});
});
//we are going to do this alot


const PORT = process.env.PORT || 5000;
app.listen(PORT);

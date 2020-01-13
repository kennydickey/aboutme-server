const express = require('express')
const app = express();
//point to .env
require('dotenv').config();
const PORT = process.env.PORT || 3001; //in case 3000 is not running

app.use(express.static('./public'));

//when / is hit in browser response will happen
app.get('/hello', (request, response) => {
  response.send('hellow world')
})
app.get('/hi', (request, response) => {
  response.send('ken')
});


//specify port and callback
app.listen(PORT, () => console.log('app is up and running'));

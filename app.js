const express = require('express');
const axios = require('axios');
const {callApi, stockNewsData} = require('./apiCall')
const app = express();

app.use(express.urlencoded({
    extended: true
  }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/tim', (req, res) => {

    res.send(req.body.apiKey);
})
app.post('/', (req, res) => {
    let tickerNews = `https://api.polygon.io/v2/reference/news?ticker=${req.body.ticker}&desc&limit=10&sort=published_utc&apiKey=${req.body.apiKey}`
    console.log(tickerNews);
    callApi(tickerNews);
    res.send(stockNewsData);
  
})


app.listen(3000);

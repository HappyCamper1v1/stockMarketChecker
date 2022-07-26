const express = require('express');
const bodyParser = require('body-parser');
const {tickerNews} = require('./tickerNews');
const {requestApi, apiData} = require('./apiCall');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.set('views', './views');
app.set('view engine', 'ejs');

let userInfo = {}


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/middleGround', (req, res) => {
    res.render('middleGround');
})
 
app.get('/stockInfo', (req, res) => {
    res.render('stockInfo', {userInfo: apiData});
})

app.post('/stockInfo', (req, res) => {
     userInfo = {
        apikey: req.body.apiKey,
        limit: req.body.limit,
        ticker: req.body.ticker.toUpperCase(),
    }

    let t = tickerNews(userInfo.apikey, userInfo.ticker, userInfo.limit)
    requestApi(t)


    console.log(userInfo);
    res.redirect('/middleGround')
})

app.listen(3000);
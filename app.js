const express = require('express');
const bodyParser = require('body-parser');
const {tickerNews, aggregatesBar, stockDetails} = require('./apiUrl');
const {requestApi, apiData} = require('./apiCall');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

app.set('views', './views');
app.set('view engine', 'ejs');

let userInfo = {}

app.get('/', (req, res) => {
    res.render('index');
});
 
app.get('/stockInfo', (req, res) => {
    res.render('stockInfo', {userInfo: apiData});
})

app.post('/stockInfo', async (req, res) => {
     userInfo = {
        apikey: req.body.apiKey,
        limit: req.body.limit,
        ticker: req.body.ticker.toUpperCase(),
    }
    let t = tickerNews(userInfo.apikey, userInfo.ticker, userInfo.limit);
    let a = aggregatesBar(userInfo.apikey, userInfo.ticker)
    let d = stockDetails(userInfo.apikey, userInfo.ticker)
    await requestApi(t,'stockNews')
    await requestApi(a,'aggregatesBar')
    await requestApi(d,'stockDetails')

    console.log(apiData.stockDetails)
    res.redirect('/stockInfo')
})

app.listen(3000);
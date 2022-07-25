const express = require('express');
const axios = require('axios');

let userInfo = {}

const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({
    extended: true
  }))

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/stockInfo', (req, res) => {
    res.render('stockInfo', {userInfo: userInfo.ticker});
})


app.post('/stockInfo', (req, res) => {
     userInfo = {
        apikey: req.body.apiKey,
        ticker: req.body.ticker
    }
    console.log(userInfo);
  res.redirect('/')
})

app.listen(3000);

module.exports = {
    userInfo
}

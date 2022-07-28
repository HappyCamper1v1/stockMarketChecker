let {year, month, day} = require("./currentDay");

function tickerNews(apiKey, ticker, limit) {
    let tickerNews = `https://api.polygon.io/v2/reference/news?ticker=${ticker}&desc&limit=${limit}&sort=published_utc&apiKey=${apiKey}`;
    return tickerNews;
}

function aggregatesBar(apiKey, ticker) {
    let aggregatesBar = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/quarter/${year}-${month}-${day}/${year}-${month}-${day}?sort=desc&limit=120&apiKey=${apiKey}`
    return aggregatesBar;
}

module.exports = {
    tickerNews,
    aggregatesBar
}
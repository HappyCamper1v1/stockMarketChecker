
function tickerNews(apiKey, ticker, limit) {
    let tickerNews = `https://api.polygon.io/v2/reference/news?ticker=${ticker}&desc&limit=${limit}&sort=published_utc&apiKey=${apiKey}`;
    return tickerNews;
}

function aggregatesBar(apiKey, ticker) {
    let aggregatesBar = `https://api.polygon.io/v2/aggs/ticker/${ticker}/range/1/quarter/2022-06-28/2022-06-28?sort=desc&limit=120&apiKey=${apiKey}`
    return aggregatesBar;
}

module.exports = {
    tickerNews,
    aggregatesBar
}
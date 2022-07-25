
function tickerNews(apiKey, ticker, limit) {
    let tickerNews = `https://api.polygon.io/v2/reference/news?ticker=${ticker}&desc&limit=${limit}&sort=published_utc&apiKey=${apiKey}`;
    console.log(tickerNews);
    return tickerNews;
}

module.exports = {
    tickerNews
}
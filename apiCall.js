const axios = require('axios');
let apiData = {};

// Want to create a function that gets the url
async function requestApi(api_url) {

    // request data from url
    const result = await axios.get(api_url);
    apiData.stockNews = result.data;

    console.log(apiData.stockNews.results[0]);
    return apiData;
    
}


module.exports = {
    requestApi,
    apiData,
}
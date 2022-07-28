const axios = require('axios');
let apiData = {};

// Want to create a function that gets the url
async function requestApi(api_url, objName) {

    // request data from url
    const result = await axios.get(api_url);
    // apiData.stockNews = result.data;

    Object.defineProperty(apiData, objName, {
        get() { return result.data; },
        set(newValue) { result.data = newValue; },
        enumerable: true,
        configurable: true
      });

    console.log(apiData);
    return apiData;
    
}


module.exports = {
    requestApi,
    apiData,
}
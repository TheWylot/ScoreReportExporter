// Base Getting ip's
let apiKey = 'd9e53816d07345139c58d0ea733e3870';
$.getJSON('https://api.bigdatacloud.net/data/ip-geolocation?key=' + apiKey, function(data) {
    console.log(JSON.stringify(data, null, 2));
});
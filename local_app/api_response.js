const axios = require('axios');

var url = 'https://my-json-server.typicode.com/GustavoZegarra/JSONPlaceholder/posts/1';

var data = {
    "precipitacion": "0.5"
}

axios.put(url,data).then(res => {
    console.log(res.data)
})

axios.get(url).then(res => {
    console.log(res.data)
})
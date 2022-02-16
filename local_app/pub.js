var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
var tema = 'PRY2021267'

client.on('connect', function () {
    setInterval(function(){
        var random = Math.random()*10;
        console.log(random);
        client.publish(tema,'Precipitacion de la lluvia: ' + random.toString())
    },3000)
});
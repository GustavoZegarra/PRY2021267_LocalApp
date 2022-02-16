var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')
var tema = 'PRY2021267'

client.on('connect', function(){
    client.subscribe(tema);
    console.log('Conectado satisfactoriamente a ' + tema)
})

client.on('message', function (topic, message) {
    console.log(message.toString())
    //client.end()
})
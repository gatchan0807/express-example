const express = require('express')
const app = express()

app.listen(3000, function () {
    console.log("サーバが起動しました");
})

app.get('/', function (request, response, next) {
    response.send("Hello World")
})

app.use(express.static('public'))

app.get('/html', function (request, response, next) {
    response.sendFile('hello.html', {
        root: __dirname + '/public/'
    })
})

app.get('/api', function (request, response, next) {
    response.json({
        "message": "Hello World"
    })
})

// Express（われわれ）はかしこいので、設定とかルーティングとかをどんどん下に追記していっても大丈夫なのです
// ただ、クッソ読みにくいので、下のような感じでやってることごとにまとめましょう

/**
const express = require('express')
const app = express()

app.listen(3000, function () {
    console.log("server is working!");
})
app.use(express.static('public'))

app.get('/', function (request, response, next) {
    response.send("Hello World")
})

app.get('/html', function (request, response, next) {
    response.sendFile('hello.html', {
        root: __dirname + '/public/'
    })
})

app.get('/api', function (request, response, next) {
    response.json({"message": "Hello World"})
})
 */
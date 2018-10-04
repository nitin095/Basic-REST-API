const express = require('express')
const appConfig = require('./config/appConfig')
const fs = require('fs')

const app = express()

let routesPath = "./routes"
fs.readdirSync(routesPath).forEach(function (file) {
    if(-file.indexOf(".js")) {
        console.log(routesPath + '/' + file)
        let route = require(routesPath + '/' + file)
        route.setRouter(app);
    }
})

app.listen(appConfig.port, () => console.log('Example app listening on port 3000'))
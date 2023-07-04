
const express = require('express');
const app = express();
const routes = require('./routers/routeAPI');
app.use(
    express.urlencoded({
    extended: true
    })
)
app.use(express.json());
app.use(routes);

app.listen(8000, function(){
    console.log("Servidor no http://localhost:8000/menu")
});
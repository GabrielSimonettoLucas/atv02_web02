const db = require('./config/db');
//const pop = require('./config/populacao'); //<= Descomentar para fazer a populaçãop 
//const reset = require ('./config/reset'); //<= Descomentar para recriar o BD
const path=require('path');
const express = require('express');
const app = express();
const routes = require('./routers/route');
const handlebars = require('express-handlebars');
const swaggerUI = require('swagger-ui-express');

app.use(express.static(path.join(__dirname, 'public')));
const swaggerDocument = require('./swagger.json');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs",swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(routes);

app.engine('handlebars', handlebars.engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars');
app.use(
    express.urlencoded({
    extended: true
    })
)
app.use(express.json());
app.use(routes);

app.listen(8081, function(){
    console.log("Servidor no http://localhost:8081/menu")
});
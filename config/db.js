const { Connection } = require('pg');
const Sequelize = require('sequelize');
//const sequelize = new Sequelize('database', 'username', 'passwor d', {
const sequelize = new Sequelize('trabalho01_web', 'postgres', '28012003',{
    host: 'localhost',
    dialect: 'postgres'
  });


var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Candidato = require('../models/candidato.js')(sequelize,Sequelize);
db.Ouvinte = require('../models/ouvinte.js')(sequelize,Sequelize);
db.Apresentacao = require('../models/apresentacao.js')(sequelize,Sequelize);
db.Adm = require('../models/adm.js')(sequelize,Sequelize);
db.Periodovotacao = require ('../models/periodovotacao.js')(sequelize,Sequelize);
module.exports = db;
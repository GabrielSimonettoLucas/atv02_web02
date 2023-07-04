const { Connection } = require('pg');
const Sequelize = require('sequelize');
//const sequelize = new Sequelize('database', 'username', 'passwor d', {
const sequelize = new Sequelize('web02', 'postgres', '28012003',{
    host: 'localhost',
    dialect: 'postgres'
  });

var db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Candidato = require('../models/candidato.js')(sequelize,Sequelize);
db.Responsavel = require('../models/responsavel_projeto.js')(sequelize,Sequelize);
db.Projeto = require('../models/projeto.js')(sequelize,Sequelize);
db.Adm = require('../models/adm.js')(sequelize,Sequelize);
module.exports = db;
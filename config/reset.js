const db = require('./db');

function reset(){
    db.sequelize.sync({force: true}).then(() => {
        console.log('{ force: true }');
    });
}

module.exports = reset();
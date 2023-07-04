module.exports = (sequelize, Sequelize) => {
    const Candidato = sequelize.define('candidato',{

        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            omitNull: true
        },

        cpf: {
            type: Sequelize.INTEGER,
            allowNull: false, unique: true
        },
        nome: Sequelize.STRING,
        idade: Sequelize.INTEGER,
        email: Sequelize.STRING,
        projetointeressado_id: Sequelize.INTEGER,
        projetoparticipando_id: Sequelize.INTEGER
    });
    return Candidato;
}
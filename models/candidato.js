module.exports = (sequelize, Sequelize) => {
    const Candidato = sequelize.define('candidato',{
        ra: {
            type: Sequelize.INTEGER,
            allowNull: false, unique: true
        },
        nome: Sequelize.STRING
    });
    return Candidato;
}
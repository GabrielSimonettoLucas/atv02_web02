module.exports = (sequelize, Sequelize) => {
    const Periodovotacao = sequelize.define('periodovotacao',{
        identificador: {
            type: Sequelize.INTEGER,
        },
        periodofotacaoiniciado: Sequelize.BOOLEAN
    });
    return Periodovotacao;
}
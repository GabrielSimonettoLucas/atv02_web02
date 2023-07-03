module.exports = (sequelize, Sequelize) => {
    const Apresentacao = sequelize.define('apresentacao',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            omitNull: true
        },
        ra_criador: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        nome_criador: Sequelize.STRING,

        participante1: Sequelize.STRING,
        participante2: Sequelize.STRING,
        participante3: Sequelize.STRING,
        participante4: Sequelize.STRING,
        participante5: Sequelize.STRING,
        participante6: Sequelize.STRING,
        musica: Sequelize.STRING,
        votos: Sequelize.INTEGER,
    });
    return Apresentacao;
}
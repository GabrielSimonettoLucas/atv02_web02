module.exports = (sequelize, Sequelize) => {
    const Projeto = sequelize.define('projeto',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true, 
            omitNull: true
        },
        cpf_criador: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        nome_criador: Sequelize.STRING,

        participante1: Sequelize.STRING,
        participante2: Sequelize.STRING,
        participante3: Sequelize.STRING,
        p1: Sequelize.STRING,
        p2: Sequelize.STRING,
        p3: Sequelize.STRING,
        interessados: Sequelize.INTEGER,
        descricao: Sequelize.STRING,
    });
    return Projeto;
}
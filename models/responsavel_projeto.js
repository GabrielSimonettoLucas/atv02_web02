module.exports = (sequelize, Sequelize) => {
    const Responsavel_projeto = sequelize.define('responsavel_projeto',{
        
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
        email: Sequelize.STRING
    });
    return Responsavel_projeto;
}
module.exports = (sequelize, Sequelize) => {
    const Adm = sequelize.define('adm',{
        id: {
            type: Sequelize.INTEGER,
            allowNull: false, unique: true,
            primaryKey: true
        }
    });
    return Adm;
}
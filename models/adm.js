module.exports = (sequelize, Sequelize) => {
    const Adm = sequelize.define('adm',{
        ra: {
            type: Sequelize.INTEGER,
            allowNull: false, unique: true
        }
    });
    return Adm;
}
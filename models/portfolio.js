// Export user model
module.exports = function (sequelize, DataTypes) {
    var Portfolio = sequelize.define("Portfolio", {
        NAME: DataTypes.STRING,
        IMAGE: DataTypes.STRING,
        DESC: DataTypes.STRING(1234),
        LINK: DataTypes.STRING
    });

    return Portfolio;
};
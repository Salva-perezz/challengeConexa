const Sequelize = require("sequelize");
const { HOST, USERNAME, NAME } = require("../config").database;

const sequelize = new Sequelize(`postgres://${USERNAME}@${HOST}/${NAME}`, {
    logging: false, 
    dialect: "postgres" 
});

module.exports = sequelize;
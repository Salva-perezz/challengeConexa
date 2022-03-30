const Sequelize = require("sequelize");
const db = require("../../dbConnection/db");

class User extends Sequelize.Model {};

User.init(
  {
    password: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
  },
  { sequelize: db, modelName: "user" }
);

module.exports = User;
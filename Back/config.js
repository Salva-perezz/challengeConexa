require('dotenv').config();

module.exports = {
    api: {
        PORT: process.env.HOST,
    },
    database: {
        NAME: process.env.DB_NAME,
        USERNAME: process.env.DB_USER,
        HOST: process.env.DB_HOST
    }
};
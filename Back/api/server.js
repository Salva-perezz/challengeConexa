const express = require('express');
const app = express();
const { PORT } = require('../config').api;
const routes = require('./components');
const db = require('../dbConnection/db');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

db.sync().then(() => {
    console.log('Database synchronized');
    
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});
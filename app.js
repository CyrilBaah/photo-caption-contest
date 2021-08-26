const express = require('express');
const app = express();
require('dotenv').config();
const { sequelize } = require('./models');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('Works');
})

const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await sequelize.authenticate();
});
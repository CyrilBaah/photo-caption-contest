const express = require('express');
const app = express();
require('dotenv').config();
const { sequelize } = require('./models');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const userRoute = require('./routes/user');

app.use(userRoute);

const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await sequelize.authenticate();
    // await sequelize.sync({ force: true});
});
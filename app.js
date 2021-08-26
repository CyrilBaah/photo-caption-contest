const express = require('express');
const app = express();
require('dotenv').config();
const { sequelize } = require('./models');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const userRoute = require('./routes/user');
const photoRoute = require('./routes/photo');

app.use(userRoute);
app.use(photoRoute);

const PORT = process.env.PORT;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await sequelize.authenticate();
    // await sequelize.sync({ force: true});
});
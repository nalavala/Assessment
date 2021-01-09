const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const dbConnection  = require("./src/db/db-connection");
const users = require('./src/routes/users');
const auth = require('./src/routes/auth');
const app = express();
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());
app.use("/user", users);
app.use("/auth", auth)
//app.use(middleware.errorHandler);

const start = async () => {
    await dbConnection.connect(process.env.DATABASE_NAME);
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`The app is running at ${port}`);
    });
}
start()
// TODO : Add logger
module.exports = app;

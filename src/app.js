const express = require("express");

const app = express();

const cors = require("cors");
app.use(cors());

require("dotenv-safe").config();

const db = require("./config/database");
db.connect();

app.use(express.json());

const userRouters = require("./routes/userRoutes");
app.use("/users", userRouters);

module.exports = app;
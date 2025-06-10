require('dotenv').config();
const dbconnect = require("./db/db.js");
dbconnect();
console.log("hello");


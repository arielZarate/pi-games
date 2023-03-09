const express = require("express");
let cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
var path = require("path");
const cookieParser = require("cookie-parser");
dotenv.config();
require("../src/Db/associations");
const app = express();
/* app.use(cors()); */
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); //ya usa bodyparser por adentro
app.use(express.static(path.join(__dirname, "public")));

//rutas
const routes = require("./routes/index.js");

app.name = "API";

/* server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev')); */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use("/", routes);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.redirect("https://http.cat/404");
});

module.exports = app;

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRouter = require("./routes/Router");
const multer=require("multer")
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads',express.static('uploads')); //serve static files




app.use("/api", UserRouter);

// Database Connection
mongoose.connect("mongodb://0.0.0.0:27017/my_db")
  .then(() => console.log("Database connected"))
  .catch(() => console.log("Cannot connect to Database"));

app.listen(PORT, ()=> console.log('server running'));

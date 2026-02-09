const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const UserRouter = require("./routes/Router.js");
const orderRouter = require("./routes/OrderRouter.js");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static("uploads"));

app.use("/api", UserRouter);
app.use("/api/orders", orderRouter);

// Database Connection
mongoose.connect("mongodb://127.0.0.1:27017/my_db")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Cannot connect to Database", err));

app.listen(PORT, () => console.log("Server running on port", PORT));

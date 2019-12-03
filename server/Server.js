import "./config/Keys";
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/Keys").mongoUri;

app.use(bodyParser.json());

const postsRoute = require('./routes/posts')

app.use("/posts", () => {
  console.log("This is middleware running");
});

app.get("/", (req, res) => {
  res.send("We are on home");
});

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("connected"))
  .catch(er => console.log(er));

app.listen(5000);

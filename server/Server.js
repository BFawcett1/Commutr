const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/Keys").mongoUri;
const cors = require("cors");

app.use(cors());
app.use(express.json());

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

app.get("/", (req, res) => {
  res.send("We are on home");
});

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("connected to mongo"))
  .catch(er => console.log(er));

app.listen(5000);

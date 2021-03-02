// connect on npm start
const express = require("express");
const mongoose = require("mongoose");

// Init express
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

// Tell Mongoose which database to connect to
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pizza-hunt", {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

// Listen on a port
app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));

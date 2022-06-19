const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");

const isotechUsers = require("./routes/api/isotechUsers");
const patients = require("./routes/api/patients");

const app = express();
const cors = require("cors");

// Body parser middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB config
const db = require("./config/keys").mongoURI;

// connect to mongoDb
mongoose
  .connect(db)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport.js")(passport);

// use routes
app.use("/api/isousers", isotechUsers);
app.use("/api/patients", patients);

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

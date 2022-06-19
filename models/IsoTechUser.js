const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create schema
const IsoTechUserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = IsoTechUser = mongoose.model("isousers", IsoTechUserSchema);

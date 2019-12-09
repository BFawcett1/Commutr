const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  payment: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: Date.now
  },
  zones:{
      type: String,
      required: true
  }
});

module.exports = mongoose.model("Posts", PostSchema);

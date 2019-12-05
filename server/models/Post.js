const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  payment: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  zones:{
      type: Number,
      required: true
  }
});

module.exports = mongoose.model("Posts", PostSchema);

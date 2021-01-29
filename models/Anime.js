const mongoose = require("mongoose");

const AnimeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  years: {
    type: Number,
    required: true,
  },
  episodes: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("series", AnimeSchema);

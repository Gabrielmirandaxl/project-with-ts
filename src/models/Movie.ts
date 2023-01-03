import mongoose from "mongoose";

const Schema = new mongoose.Schema({

  title: {
    type: String,
  },
  rating: {
    type: Number,
  },
  description: {
    type: String,
  },
  director: {
    type: String,
  },
  stars: {
    type: Array,
  },
  poster: {
    type: String,
  }

}, {
  timestamps: true
})

const Model = mongoose.model("movies", Schema)

export default Model
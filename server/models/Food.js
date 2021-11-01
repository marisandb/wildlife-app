const { Schema, model } = require("mongoose");
// const wildlifereordSchema = require("./Wildliferecord");
const dateFormat = require("../utils/dateFormat");

const foodSchema = new Schema({
  food: {
    type: String,
    required: "name of food",
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => dateFormat(timestamp),
  },
  username: {
    type: String,
    required: true,
  },
  // wildlifereord: [wildlifereordSchema],

  eatenAll: {
    type: String,
  },

  timeEat: {
    type: String,
  },
  name: {
    type: String,
    timestamps: true,
  },
});

foodSchema.virtual("wildliferecordCount").get(function () {
  return this.wildlifereord.length;
});

const Food = model("Foods", foodSchema);

module.exports = Food;

const { Schema, model } = require("mongoose");
const wildlifereordSchema = require("./Wildliferecord");
const dateFormat = require("../utils/dateFormat");

const animalSchema = new Schema({
  animal: {
    type: String,
    required: "name of animal",
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

animalSchema.virtual("wildliferecordCount").get(function () {
  return this.wildliferecord.length;
});

const Animal = model("Animals", animalSchema);

module.exports = Animal;

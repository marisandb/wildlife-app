const { Schema, model } = require("mongoose");
const wildliferecordSchema = require("./Wildliferecord");
const dateFormat = require("../utils/dateFormat");

const animalSchema = new Schema(
  {
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

    animaltype: {
      type: String,
      require: true,
    },
    speciesName: {
      type: String,
      required: true,
    },
    circumstance: {
      type: String,
    },

    animalId: {
      type: String,
    },
    speciesAgeGroup: {
      type: String,
    },

    initObservations: {
      type: String,
      required: true,
      maxlength: 280,
    },
    wildliferecords: [wildliferecordSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

animalSchema.virtual("wildliferecordCount").get(function () {
  return this.Wildliferecord.length;
});

const Animal = model("Animal", animalSchema);

module.exports = Animal;

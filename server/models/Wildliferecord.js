const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const animalSchema = new Schema(
  {
    NewRecord: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },

    animaltype: {
      type: Number,
      require: true,
    },
    speciesName: {
      type: String,
      required: true,

      circumstance: {
        type: String,
      },
      initObservations: {
        type: String,
        required: true,
        maxlength: 280,
      },
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = animalSchema;

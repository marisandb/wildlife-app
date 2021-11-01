const { Schema } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const wildlifereordSchema = new Schema(
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
      type: String,
      require: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = wildlifereordSchema;

const { Schema } = require("mongoose");

const dateFormat = require("../utils/dateFormat");

const wildliferecordSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

module.exports = wildliferecordSchema;

const db = require("../config/connection");
const { Wildliferecord, User } = require("../models");
db.once("open", async () => {
  await Wildliferecord.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  const createdUsers = await User.collection.insertMany(userData);

  console.log("all done!");
  process.exit(0);
});

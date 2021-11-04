const { AuthenticationError } = require("apollo-server-express");
const { User, Animal, Wildliferecord } = require("../models");
const { signToken } = require("../utils/auth");

// // graphql appolo server needs to be able to resolve these reqests.
// //needs to be able to query user--who is the client?
const resolvers = {
  //   Query: {
  //   //   myanimals: async (_, __, { db, user }) => {
  //   //     if (!user) {
  //   //       throw new Error("Authentication Error. Please sign in");
  //   //     }

  //   //     return await db
  //   //       .collection("animal")
  //   //       .find({ userIds: user._id })
  //   //       .toArrray();
  //   //   },

  //   //   getanimal: async (_, { id }, { db, user }) => {
  //   //     if (!user) {
  //   //       throw new Error("Authentication Error. Please sign in");
  //   //     }

  //   //     return await db.collection("animal").findOne({ _id: ObjectId(id) });
  //   //   },
  //   // },

  Mutation: {
    //     // signUp: async (_, { input }, { db }) => {
    //     //   const hashedPassword = bcrypt.hashSync(input.password);
    //     //   const newUser = {
    //     //     ...input,
    //     //     pasword: hashedPassword,
    //     //   };

    //     //   const result = await db.collection("Users").insert(newUser);
    //     //   const user = result.ops[0];
    //     //   return {
    //     //     user,
    //     //     token: getToken(user),
    //     //   };
    //     // },
    //     // signIn: async (_, { input }, { db }) => {
    //     //   const user = await db.collection("User").findOne({ email: input.email });
    //     //   const isPasswordCorrect =
    //     //     user && bcrypt.compareSync(input.password, user.password);

    //     //   if (!user || !isPasswordCorrect) {
    //     //     throw new Error("Invaild credentials!");
    //     //   }

    //     //   return {
    //     //     user,
    //     //     token: getToken(user),
    //     //   };
    //     // },

    //     // User: {
    //     //   id: ({ _id, id }) => _id || id,
    //     // },

    //     // me: async (parent, args, context) => {
    //     //   if (context.user) {
    //     //     const userData = await User.findOne({ _id: context.user._id })
    //     //       .select("-__v -password")
    //     //       .populate("Animal")
    //     //       .populate("Wildliferecord"); // this model doesnt exist so no way to populate with this data

    //     //     return userData;
    //     //   }

    //     //   throw new AuthenticationError("Not logged in");
    //     // },
    //     //who are all the users?
    //     users: async () => {
    //       return User.find()
    //         .select("-__v -password")
    //         .populate("Animals")
    //         .populate("Wildliferecord");
    //     },
    //     // who is a specific user for login purposes--is the client
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("animal")
        .populate("wildliferecord");
    },
    //     //get all the animals of a user ordered recent to less recent
    //     animals: async (parent, { username }) => {
    //       const params = username ? { username } : {};
    //       return animal.find(params).sort({ createdAt: -1 });
    //     },
    //     // get specific animal
    //     animal: async (parent, { _id }) => {
    //       return animal.findOne({ _id });
    //     },

    //     // addUser: async (parent, args) => {
    //     //   const user = await User.create(args);
    //     //   const token = signToken(user);

    //     //   return { token, user };
    //     // },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    addUserWildliferecord: async (parent, args, context) => {
      if (context.user) {
        const wildliferecord = await wildliferecord.create({
          ...args,
          username: context.user.username,
        });
      }
      await User.findByIdAndUpdate(
        { _id: context.user._id },
        { $push: { wildliferecord: wildliferecord._id } },
        { new: true }
      );

      return wildliferecord;

      throw new AuthenticationError("You need to be logged in!");
    },

    //     addWildliferecord: async (
    //       parent,
    //       { WildliferecordId, wildliferecordBody },
    //       context
    //     ) => {
    //       if (context.user) {
    //         const updatedWildliferecord = await Wildliferecord.findOneAndUpdate(
    //           { _id: AnimalId },
    //           {
    //             $push: {
    //               wildliferecord: { username: context.user.username },
    //             },
    //           },
    //           { new: true, runValidators: true }
    //         );

    //         return updatedWildliferecord;
    //       }

    //       throw new AuthenticationError("You need to be logged in!");
    //     },
  },
};
exports = resolvers;

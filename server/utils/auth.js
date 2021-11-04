const jwt = require("jsonwebtoken");
const secret = "mysecretsshhhhh";
const expiration = "2h";

const bcrypt = require("bcrypt");
// const dotenv = require("dotenv");
// dotenv.config();
// const { DB_URI, DB_NAME, JWT_SECERT } = process.env;

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    ["Bearer", "<tokenvalue>"];
    if (req.headers.authorization) {
      token = token.split(" ").pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log("Invalid token");
    }

    return req;
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

// const getToken = (user) =>
//   jwt.sign({ id: user._id }, JWT_SECERT, { expiresIn: "1 hr" });

// const getUsersFromToken = async (token, db) => {
//   if (!token) {
//     return null}

//   const tokenData = jwt.verify(token, JWT_SECERT);
//   if (!tokenData?.id) {
//     return null;
//   }
//   return await db.collection("Users").findOne({ _id: ObjectID(tokenData.id) });
// }

// Mutation: {
//   signUp:async (_,{input}, {db})=> {
//     const hashedPassword =bcrypt.hashSync(input.password);
//     const newUser={
//       ...input,
//           pasword:hashedPassword,
//   }

//   const result =await db.collection('Users').insert(user);
//   const  user= result.ops[0]
//     return {
//     user,
//     token: getToken(user),
//     }
//   },

// signIn: async(_,{input}, {db})=>{
//   const user=await db.collection('User').findOne({email:input.email});
//   const isPasswordCorrect= user && bcrypt.compareSync(input.password, user.password);

//   if (!user || !isPasswordCorrect){
//   throw new Error('Invaild credentials!');
// }

// return {
//   user,
//   token: getToken(user),
// }

// },
// };

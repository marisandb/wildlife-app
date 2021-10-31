import bcrypt from 'bcryptsjs';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// ReactDOM.render(
// <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
#;
check;
if (password)
  is;
correct;
#;
const isPasswordCorrect = bcrypt.compareSync(input.password, user.password);
#;
if (!isPasswordCorrect) {
    #; throw new Error('Invaild credentials!');
}


const context ={
    const user = getUserFromToken(req.headers.author)
    db,
  }

  User:{
    id: ({_id, id})=>_id ||id
  
   }


   Resolvers define the technique for fetching the types defined in the
   schema. This resolver retrieves books from the "books" array above.

   #oneway hashing

   save to datebase

   The ApolloServer constructor requires two parameters: your schema
   definition and your set of resolvers.

   // The `listen` method launches a web server.
   const connection =client.connection;
   connection.once('open',() => {
    console.log("MongoDB database connection established successfully");
    

    const start =async() => {
        const client = new MongoClient(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db=client.db(DB_NAME);
      
console.log("NICK");
// import App from './App';
require("dotenv").config();
const port = process.env.Port || 5000;

// eslint-disable-next-line no-undef
// app.use(cors());
// app.use(express.json());

const uri = process.env._URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = client.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

client.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const connectDB = async () => {
  try {
    process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      };

    console.log("MongoDB database connection established successfully");
  } catch (error) {
    console.error("MongoDB connection FAIL");
    process.exit(1);
  }
};

module.exports = connectDB;

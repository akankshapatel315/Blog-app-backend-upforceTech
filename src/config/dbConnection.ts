const mongoose = require("mongoose");

function connectDB() {
  // const url = "mongodb://localhost:27017/BlogApp";
  const url = "mongodb+srv://akankshapatel315:Ak%40nkshaisthebest@cluster0.8am0v.mongodb.net/blog-app"
  try {
    mongoose.connect(url, {
      // useNewUrlParser: true, 
      // useUnifiedTopology: true ,
      serverSelectionTimeoutMS: 20000, 
      socketTimeoutMS: 45000 
    }).then((res: any) => {
      console.log("connected MongoDB")
    });
  } catch (err: any) {
    console.error("error while connecting database",err.message);
    process.exit(1);
  }
}

module.exports = connectDB;

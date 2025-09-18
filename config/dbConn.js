const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      dbName: "CompanyDB",
    });
    console.log(mongoose.connection.db.databaseName);
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

module.exports = connectDB;

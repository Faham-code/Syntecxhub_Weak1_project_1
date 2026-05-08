const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require('./routes/user,js');

const app = express();
app.use(express.json()); 
// create app properly
const PORT = 8000;


app.use ("/", userRoutes);
app.get("/", (req, res) => {
  res.send("Hello World");
});

const start = async () => {
  try {
    await mongoose.connect("mongodb+srv://Faham:IapRUmPa8meSaF42@task1.czkh3yi.mongodb.net/");
    console.log(`Connected to DB successfully ${mongoose.connection.host}`);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("DB Connection Failed:", error);
  }
};

start();
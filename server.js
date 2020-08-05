const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req,res) => {
    res.json({
        success:true
    });
});

app.get("/*", (req,res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"))
});

app.use(express.static("public"));

if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/final-project-03", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() =>   {
    console.log("Successfully connected to database.");
})
.catch((err) => {
    console.log("Unable to connect to database");
    console.log(err);
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
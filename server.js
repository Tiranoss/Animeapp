require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const adminRoute = require("./routes/admin");

const app = express();
app.use(express.json());
app.use(cors());
app.set("view engine", "ejs");
app.set("views", "./src/pages");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.use("/", adminRoute);

/*app.use("/", (req, res, next) => {
  res.json({ msg: "Hello Everyone!" });
});*/

// Routes
app.use("/user", require("./routes/userRoute"));
app.use("/api", require("./routes/upload"));

//Connect to mongoDB
const URI = process.env.MONGO_URL;
mongoose.connect(
  URI,
  {
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to mongoDB");
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port`, PORT);
});

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
// Routes
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/user");
const postRoute = require("./Routes/post");
const commentRoute = require("./Routes/comment");

const bodyParser = require("body-parser");
const app = express();

app.use(cors());
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "OPTIONS, GET, POST, PUT, PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   next();
// });

app.use(bodyParser.json());
app.use("/uploads/", express.static("uploads"));

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/comment", commentRoute);

connectDB(() => {
  app.listen(8080);
});

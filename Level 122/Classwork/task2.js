const express = require("express");
const app = express();

function authorization(req, res, next) {
  if (req.query.user === "Luka") {
    req.username = "Luka";
    next();
    return;
  }
  res.send("Authorization failed");
}

app.use(authorization);

app.get("/", (req, res) => {
  console.log("Main");
  res.send("Welcome to home page");
});

app.get("/products", (req, res) => {
  res.send(`Here are your products ${req.username}`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

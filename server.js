// verifying JWT on the server

const jwt = require("jsonwebtoken");

// secret key used to verify the token
const secretKey = "earth";

// create a jwt token
const { createJwt } = require("./webpage");
const token = createJwt();

// Verify the token
jwt.verify(token, secretKey, (err, decoded) => {
  if (err) {
    console.log("Token verification failed", err);
  } else {
    console.log("Decoded token", decoded);
  }
});

const express = require("express");

const app = express();

app.post("/", function (req, res) {
  res.send("Say hello");
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`server started`);
});

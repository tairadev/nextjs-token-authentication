const jwt = require("jsonwebtoken");

const SECRET_KEY =
  "dsaokifnoasifnoiseangiousdang45464968g4ed89g4d98fsg4v96f7a9as8g";

const token = jwt.sign(
  {
    name: "Guilherme",
  },
  SECRET_KEY,
  {
    expiresIn: "10y",
    subject: "1",
  }
);

console.log(token);

const MY_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR3VpbGhlcm1lIiwiaWF0IjoxNzM3NDkwMTQ2LCJleHAiOjIwNTMwNjYxNDYsInN1YiI6IjEifQ.MrFnpN7EET73BTiQJr61ADVjG7VUKNuypPWTQBEdG-0";

// console.log(jwt.verify(MY_TOKEN, SECRET_KEY));

console.log(jwt.decode(MY_TOKEN));

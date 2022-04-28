const express = require("express");
const path = require("path");

const app = express();

// include and initialize the rollbar library with your access token
var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: "11a112d4ba3e4048a1fbb694b599f0db",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

app.get("/", (req, res) => {
  rollbar.log("Hello world!");
  res.sendFile(path.join(__dirname, "../index.html"));
});

const port = process.env.PORT || 4545;

app.listen(port, () => console.log(`Running on port ${port}`));

const express = require("express");
const path = require("path");

const server = express();

server.use("/assets", express.static(path.join(__dirname, "src", "assets")));

server.get("/dist/build.js", (req, res, next) => {
  res.sendFile(path.join(__dirname, "dist", "build.js"));
});

server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

server.listen(3030);
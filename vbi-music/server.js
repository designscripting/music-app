const express = require('express');

const app = express();

app.use(express.static("./dist/vbi-music"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/vbi-music/" });
});

app.listen(process.env.PORT || 8080);
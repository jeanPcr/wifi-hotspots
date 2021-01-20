const express = require("express");
const app = express();
const host = "http://localhost";
const port = 7894;

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
  console.log(`Static-file-server is running at ${host}:${port}`);
});

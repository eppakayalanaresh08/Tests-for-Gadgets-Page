const express = require("express");
const value = express();

value.get("/gadgets", (request, response) => {
  response.sendFile("./gadgets.html", { root: __dirname });
});
value.listen(3000);

const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (request, response) => {
  response.send({
    message: "Hello World",
    currentTime: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});

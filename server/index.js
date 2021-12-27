
const express = require("express");

const PORT = process.env.PORT || 5500;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});


const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 5000;

// API url
const apiUrl = "https://api.covid19india.org/data.json";

app.get("/getdata", async (req, res, next) => {
  const { data } = await axios.get(apiUrl);
  res.header("Access-Control-Allow-Origin", "*");
  res.send(data);
  console.log("data requested...");
});

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});

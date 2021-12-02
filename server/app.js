const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 5000;

// API url
const apiUrl = "https://api.covid19india.org/data.json";

app.get("/getdata", async (req, res, next) => {
  try {
    const { data } = await axios.get(apiUrl);
    res.header("Access-Control-Allow-Origin", "*");
    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
});

// For the Production side
if (process.env.NODE_ENV == "production") {
  const path = require("path");
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});

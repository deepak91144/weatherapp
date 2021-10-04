const express = require("express");
const request = require("request");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  request.get(
    "http://api.weatherapi.com/v1/current.json?key=0fabb0ca51064563931124759212909&q=bhubaneswar&aqi=no",
    (error, data, body) => {
      if (error) {
        console.log(error);
      }
      const allData = JSON.parse(body);
      console.log(allData);
      res.render("weather", {
        allData: allData,
      });
    }
  );
});

app.listen(port, () => console.log(`Example app listening on port port!`));

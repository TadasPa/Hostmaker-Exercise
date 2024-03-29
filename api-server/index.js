const express = require('express')
const app = express()
const port = 3100

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send(
    [
      {
        "owner": "33 miles away",
        "address": {
            "line1": "",
            "line4": "",
            "postCode": "SG4 7JD",
            "city": "London",
            "country": "U.K."
        },
        "airbnbId": 3512503,
        "numberOfBedrooms": 1,
        "numberOfBathrooms": 1,
        "incomeGenerated": 2000.34
      },
      {
        "owner": "carlos",
        "address": {
            "line1": "Flat 5",
            "line4": "7 Westbourne Terrace",
            "postCode": "W2 3UL",
            "city": "London",
            "country": "U.K."
        },
        "airbnbId": 3512500,
        "numberOfBedrooms": 1,
        "numberOfBathrooms": 1,
        "incomeGenerated": 2000.34
      },
      {
        "owner": "ankur",
        "address": {
            "line1": "4",
            "line2": "Tower Mansions",
            "line3": "Off Station road",
            "line4": "86-87 Grange Road",
            "postCode": "SE1 3BW",
            "city": "London",
            "country": "U.K."
        },
        "airbnbId": 1334159,
        "numberOfBedrooms": 3,
        "numberOfBathrooms": 1,
        "incomeGenerated": 10000
      },
      {
        "owner": "elaine",
        "address": {
            "line1": "4",
            "line2": "332b",
            "line4": "Goswell Road",
            "postCode": "EC1V 7LQ",
            "city": "London",
            "country": "U.K."
        },
        "airbnbId": 12220057,
        "numberOfBedrooms": 2,
        "numberOfBathrooms": 2,
        "incomeGenerated": 1200
      }
    ]))

app.listen(port, () => console.log(`App listening on port ${port}!`))
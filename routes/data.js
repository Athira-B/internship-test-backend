const express = require("express");
const router = new express.Router();
const mongodb = require("mongodb");
const request = require("request");
const { count } = require("../model/datamodel");
const Data = require("../model/datamodel");
const MongoClient = mongodb.MongoClient;
const url = "https://api.wazirx.com/api/v2/tickers";
const connectionURL =
  "mongodb+srv://AthiraNadeem:Athira18@@cluster0.ixxrt.mongodb.net/FirstDatabase?retryWrites=true&w=majority";
router.get("/save-data", async (req, res) => {
  request({ url, json: true }, (err, response) => {
    if (err) {
      console.log(err, "HY");
    } else {
      const a = Object.keys(response.body);
      console.log(a);
      MongoClient.connect(
        connectionURL,
        { useNewUrlParser: true },
        (error, client) => {
          if (error) {
            return console.log("Unable to connect to database" + error);
          }
          a.map((data, index) => {
            client
              .db("FirstDatabase")
              .collection("data")
              .insertOne(response.body[data], (err, res) => {
                if (err) {
                  res.send("failed");
                }
              });
          });
          res.send("success");
        }
      );
    }
  });
});

router.get("/get-data", async (req, res) => {
  MongoClient.connect(
    connectionURL,
    { useNewUrlParser: true },
    async (error, client) => {
      if (error) {
        return console.log("Unable to connect to database" + error);
      }

      client
        .db("FirstDatabase")
        .collection("data")
        .find({})
        .toArray((e, data) => {
          res.send({ data: data });
        });
    }
  );
});

module.exports = router;

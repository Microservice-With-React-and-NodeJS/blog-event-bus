const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

// impliment the endpoint to watch for incoming events
app.post("/events", async (req, res) => {
  //whatever comin gin the req is our event, we dont know what is that
  const event = req.body;

  //make post requests to different servers
  await axios.post("http://localhost:4000/events", event); // posts
  await axios.post("http://localhost:4001/events", event); // comments
  await axios.post("http://localhost:4002/events", event); // query service
  await axios.post("http://localhost:4003/events", event); // comment moderation service

  // anytime anyone tries to send an event we send ok msg
  res.send({ status: "OK" });
});

// event bus listening port
app.listen(4005, () => {
  console.log("Event bus listening on 4005");
});

const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

// impliment the endpoint to watch for incoming events
app.post("/events", (req, res) => {
  //whatever comin gin the req is our event, we dont know what is that
  const event = req.body;

  events.push(event);

  //make post requests to different servers
  axios.post("http://posts-clusterip-srv:4000/events", event); // posts
  axios.post("http://comments-srv:4001/events", event); // comments
  axios.post("http://query-srv:4002/events", event); // query service
  axios.post("http://moderation-srv:4003/events", event); // comment moderation service

  // anytime anyone tries to send an event we send ok msg
  res.send({ status: "OK" });
});

// endpoint to get all the events that occured
app.get("/events", (req, res) => {
  res.send(events);
});

// event bus listening port
app.listen(4005, () => {
  console.log("Event bus listening on 4005");
});

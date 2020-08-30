const express = require("express");
const redis = require("redis").createClient();
const app = express();
const port = process.env.PORT;
const HELLO = "Hello ";
var requestCount = 0;

app.use(express.json());
app.get("/resource/:reqParam", (req, res) => {
  requestCount++;
  console.log("HTTP Method - ", req.method, " request_count-", requestCount);
  console.log("Headers - ", req.headers);
  console.log("Parameter - ", req.params.reqParam);
  const name = req.params.reqParam
  redis.get(name, (err, redisResponse) => {
    console.log("Response from cache", redisResponse);
    //if data is present in cache then return from cache
    if (redisResponse) {
      res.send(redisResponse);
      return;
    }
    // if data is not present in cache then set to cache return hard coded
    redis.set(
      name,
      HELLO.concat(name," with love from redis\n\n"),
      "EX",
      1000
    );
    res.send(HELLO.concat(name," with love from express\n\n"));
  });
});

app.listen(port, () => {
  console.log(
    `Express HTTP server is listening at http://localhost:${port}/resource`
  );
});

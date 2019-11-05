var express = require("express");
var morgan = require("morgan");
var ip = require("ip");

var app = express();

const PORT = 8080;

app.use(morgan('short'));

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});

app.get("/health", (req, res, next) => {
  res.json("ok");
});

app.get("/compute", (req, res, next) => {
  compute(res);
});


async function compute(res) {
  var ms = Math.floor((Math.random() * 3000) + 1);

  await sleep(ms);

  res.json(`Computed on ${ip.address()}`);
}

function sleep(ms) {
  return new Promise( resolve => setTimeout(resolve, ms) )
}


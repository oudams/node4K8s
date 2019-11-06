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
  res.json(`Computed on ${ip.address()}`);
});

app.get("/intense", (req, res, next) => {
	console.time('mySlowFunction');
	let result = 0;
	for (var i = Math.pow(6, 7); i >= 0; i--) {
		result += Math.atan(i) * Math.tan(i);
	};
  console.timeEnd('mySlowFunction');

  res.send('Intense Get!');
})

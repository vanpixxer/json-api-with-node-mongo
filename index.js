var express = require('express'),
app = express();

app.get('/', function(req, res) {
    console.log("HI THERE FROM EXPRESS");
});


app.listen(process.env.PORT, function() {
    console.log("APP IS RUNNING ON PORT " + process.env.PORT);
})
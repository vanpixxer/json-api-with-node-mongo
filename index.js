var express = require('express'),
app = express();
<<<<<<< HEAD
bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.send("Hello from the root route!");
});

app.use('/api/todos', todoRoutes);

app.listen(process.env.PORT, function() {
    console.log("APP IS RUNNING ON PORT " + process.env.PORT);
});
=======

app.get('/', function(req, res) {
    console.log("HI THERE FROM EXPRESS");
});


app.listen(process.env.PORT, function() {
    console.log("APP IS RUNNING ON PORT " + process.env.PORT);
})
>>>>>>> 304b37984c4d62665e4af79a6f671bb72be9a847

var express    = require("express");
var morgan     = require("morgan");
var bodyParser = require("body-parser");
var jwt        = require("jsonwebtoken");
var app        = express();
var userService = require("./user-service");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

app.post('/auth', function(req, res) {
    if(userService.get(req.body.user)){
        let user = userService.get(req.body.user);
        res.json({
            type: true,
            data: user,
            token: user.token
        }); 
    } else {
        res.json({
            type: false,
            data: "Incorrect name/password"
        });    
    }
});

app.post('/signup', function(req, res) {
    if(userService.get(req.body.user)){
        res.json({
            type: false,
            data: "User already exists!"
        });
    } else {
        let user = req.body.user;
        user.token = jwt.sign(user, 'shhhhh');

        userService.save(user); 
        res.json({
                type: true,
                data: user,
                token: user.token
            });
    }
});

app.get('/me', ensureAuthorized, function(req, res) {
    if(userService.getWithToken(req.token)){
        res.json({
            type: true,
            data: userService.getWithToken(req.token)
        });
    }
});

function ensureAuthorized(req, res, next) {
    var bearerToken;
    var bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== 'undefined') {
        var bearer = bearerHeader.split(" ");
        bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.send(403);
    }
}

app.listen(4000, function () {
    console.log( "Server listening...");
});
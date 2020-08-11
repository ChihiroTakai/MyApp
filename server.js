var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require("mongoose"),
    Task = require("./api/models/taskModel"), // 作成したModelの読み込み
    bodyParaser = require("body-parser");

mongoose.promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");
// mongodbの接続設定
//mongoose.connect("mongodb://localhost:27017/fitnessdb");

app.use(bodyParaser.urlencoded({ extended: true}));
app.use(bodyParaser.json());

var routes = require("./api/routes/routes"); // Routeのインポート
routes(app); // appにRouteを設定する

app.listen(port); // appを特定のportでlistenさせる

console.log("todo list RESTful API server started on: " + port);
var express = require("express"),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require("mongoose"),
    Task = require("./api/models/taskModel"), // 作成したModelの読み込み
    User = require("./api/models/userModel"),
    bodyParaser = require("body-parser");

// DB設定
mongoose.promise = global.Promise;
mongoose.connect("mongodb://localhost/Tododb");

// HTML(ejs)のfromのinputに入力された値を受け取れるようにするもの
// クライアントから送信されたデータを取得、操作する
app.use(bodyParaser.urlencoded({ extended: true}));
app.use(bodyParaser.json());

var task = require("./api/routes/task"); // taskのインポート
var user = require("./api/routes/user"); // userのインポート
task(app); // appにtaskを設定する
user(app); // appにuserを設定する

app.listen(port); // appを特定のportでlistenさせる

console.log("todo list RESTful API server started on: " + port);
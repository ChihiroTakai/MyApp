const userRoutes = require("../routes/user");

var mongoose = require("mongoose"),
    User = mongoose.model("Users");

// 全てのユーザーを取得する
exports.all_users = function(req, res) {
    User.find({}, function(err, user) {
        if (err) res.send(err);
        res.json(user);
    });
};


// 新しいユーザーを作成する
exports.create_user = function(req, res) {
    var new_user = new User(req.body);
    new_user.save(function(err, user) {
        if (err) res.send(err);
        res.json(user);
    });
};

// 特定のユーザーを取得する
exports.load_user = function(req, res) {
    User.findById(req.params.userId, function(err, user) {
        if (err) res.send(err);
        res.json(user);
    });
};

// 特定のユーザーを更新する
exports.update_user = function(req, res) {
    Task.findOneAndUpdate(
        { _id: req.params.userId },
        req.body,
        { new: true },
        function(err, user) {
            if (err) res.send(err);
            res.json(user);
        }
    );
};

// 特定のユーザーを削除する
exports.delete_user = function(req, res) {
    User.remove(
        {
            _id: req.params.userId
        },
        function(err, user) {
            if(err) res.send(err);
            res.json({ message: "Task successfully deleted"});
        }
    );
};
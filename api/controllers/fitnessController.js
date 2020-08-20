const fitnessRoutes = require("../routes/fitness");

var mongoose = require("mongoose"),
    Fitness = mongoose.model("Fitness");

// 全てのデータを取得
exports.all_fitness = function(req, res) {
    Fitness.find({}, function(err, fitness) {
        res.json(fitness);
    });
};

// 新しいデータを作成
exports.create_fitness = function(req, res) {
    var new_fitness = new Fitness(req.body);
    new_fitness.save(function(err, fitness) {
        if (err) res.send(err);
        res.json(fitness);
    });
};

// 特定のデータを取得
exports.load_fitness = function(req, res) {
    Fitness.findById(req.params.fitnessId, function(err, fitness) {
        if (err) res.send(err);
        res.json(fitness);
    });
};

// 特定のデータを更新
exports.update_fitness = function(req, res) {
    Fitness.findOneAndUpdate(
        { _id: req.params.fitnessId },
        req.body,
        { new: true },
        function(err, fitness) {
            if (err) res.send(err);
            res.json(fitness);
        }
    );
};

// 特定のデータを削除
exports.delete_fitness = function(req, res) {
    Fitness.remove(
        { _id: req.params.fitnessId },
        function(err, fitneess) {
            if(err) res.send(err);
            res.json({ message: "Fitnessデータを削除しました"})
        }
    );
};
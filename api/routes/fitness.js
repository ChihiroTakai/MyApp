// fitnessコレクション
module.exports = function(app) {
    var fitnessList = require('../controllers/fitnessController');

    app.route("/fitness")
        .get(fitnessList.all_fitness)
        .post(fitnessList.create_fitness);

    app.route("/fitness/:fitnessId")
        .get(fitnessList.load_fitness)
        .put(fitnessList.update_fitness)
        .delete(fitness.delete_fitness);
}
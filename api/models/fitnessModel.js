var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Schemaの設定
var FitnessSchema = new Schema( {
    type : {
        type: String
    },
    activeTime : {
        type: Date
    },
    dustance : {
        type: int
    }
});

module.exports = mongoose.mongo.model("Fitness", FitnessSchema);
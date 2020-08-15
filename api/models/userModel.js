var mongoose = require("mongoose");
var Schema = mongoose.Schema;
objectId = Schema.ObjectId;

// Schemaの設定
var UserSchema = new Schema ({
    userId : {
        type: String
    },
    name : {
        type: String
    }
});

module.exports = mongoose.model("Users", UserSchema);
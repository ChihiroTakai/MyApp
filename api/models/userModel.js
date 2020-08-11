var mongoose = require("mongoose");
var Schema = mongoose.Schema;
objectId = Schema.ObjectId;

// Schemaの設定
var UserSchema = new Schema ({
    user : {
        _id: objectId,
        name: String
    }
});

module.exports = mongoose.model("Users", UserSchema);
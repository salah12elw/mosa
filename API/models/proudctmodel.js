const {Schema, model } = require("mongoose");

const proudctSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    image:{
        type:String
    },
    price:{
        type:String,
        required:true
    }
});

const proudct_MODEL = model("proudct", proudctSchema);

module.exports = proudct_MODEL;
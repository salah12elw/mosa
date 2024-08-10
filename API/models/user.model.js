const { schema, model, Schema } = require("mongoose");
   
const userSchema = new Schema({
    name: String,
    age: Number,
    phone: {
        type: String,
        require: true,
    },
    points: {
        type: Number,
        default: 0,
    },
    userName: String,
    pass: String,
})
const User_Model = model("user",userSchema)

module.exports = User_Model
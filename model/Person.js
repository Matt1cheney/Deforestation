const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PersonSchema = new Schema({
    region: {
        type: Schema.Types.ObjectId,
        ref: "Region",
        default: null
    },
    name: String,
    email: String,
    phone: Number,
    notes: String,
    role: String
});

module.exports = mongoose.model("Person", PersonSchema, "Persons");
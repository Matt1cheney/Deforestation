const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PersonSchema = new Schema({
    region: {
        type: Schema.Types.ObjectId,
        ref: "Region",
        default: null
    },
    name: String,
    fireBaseUid: String,
    email: String,
    phone: Number,
    notes: String,
    role: {
        type: String,
        default: "Volunteer"
    }
});

module.exports = mongoose.model("Person", PersonSchema, "Persons");
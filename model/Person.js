const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PersonSchema = new Schema({
    region: {
        type: Schema.Types.ObjectId,
        ref: "Region",
        default: null
    },
    name: String,
    firebaseUid: String,
    email: String,
    phone: String,
    notes: String,
    role: {
        type: String,
        default: "Volunteer"
    }
});

module.exports = mongoose.model("Person", PersonSchema, "Persons");
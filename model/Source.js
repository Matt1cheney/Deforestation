const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SourceSchema = new Schema({
    name: String,
    region: {
        type: Schema.Types.ObjectId,
        ref: "Region",
        default: null
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Person",
        default: null
    },
    address: String,
    coordinator: {
        type: Schema.Types.ObjectId,
        ref: "Person",
        default: null
    },
    seedlings: Array
});

module.exports = mongoose.model("Source", SourceSchema, "Sources");
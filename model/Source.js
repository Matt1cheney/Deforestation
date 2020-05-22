const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SourceSchema = new Schema({
    region: {
        type: Schema.Types.ObjectId,
        ref: "Region",
        default: null
    },
    owner: String,
    address: String,
    coordinator: {
        type: Schema.Types.ObjectId,
        ref: "Person",
        default: null
    },
    seedCount:Number,
    treeType: String,
    targetAge: Number,
    availDate: Date,
    intendSite: {
        type: Schema.Types.ObjectId,
        ref: "Site",
        default: null
    }
});

module.exports = mongoose.model("Source", SourceSchema, "Sources");
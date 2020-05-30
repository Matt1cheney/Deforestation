const mongoose = require("mongoose")
const Schema = mongoose.Schema

const SiteSchema = new Schema({
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
    latitude: Number,
    longitude: Number,
    status: String,
    notes: String,
    coordinator: {
        type: Schema.Types.ObjectId,
        ref: "Person",
        default: null
    },
    profileImage: String,
    contract: String,
    document: String,
    additionalImages: [{ type: String }],
    plantingTarget: String 
});

module.exports = mongoose.model("Site", SiteSchema, "Sites");
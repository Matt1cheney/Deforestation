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
    street: String,
    city: String,
    state: String,
    zip: String,
    latitude: Number,
    longitude: Number,
    status: String,
    notes: [{ type: String}],
    coordinator: {
        type: Schema.Types.ObjectId,
        ref: "Person",
        default: null
    },
    profileImage: String,
    contract: String,
    document: [{ type: String }],
    additionalImages: [{ type: String }],
    plantingTarget: [{type: String}] 
});

module.exports = mongoose.model("Site", SiteSchema, "Sites");
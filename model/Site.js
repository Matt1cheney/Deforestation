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
    address: {
        type: Object,
        default: null
    },
    plantingTarget: {
        type: Object,
        default: null
    },
    latitude: Number,
    longitude: Number,
    status: String,
    coordinator: {
        type: Schema.Types.ObjectId,
        ref: "Person",  
        default: null
    },
    profileImage: String,
    contract: String,
    additionalImages: [{ type: String }],
    document: String,
    notes: String
});
SiteSchema.index({'$**': 'text'});

module.exports = mongoose.model("Site", SiteSchema, "Sites");
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
    address: {
        type: Object,
        default: null
    },
    coordinator: {
        type: Schema.Types.ObjectId,
        ref: "Person",
        default: null
    },
    seedlings: {
        count:Number,
        tree_type: String,
        target_age: Number,
        available: Date,
        intendSite: {
            type: Schema.Types.ObjectId,
            ref: "Site",
            default: null
        }
    }
});
SourceSchema.index({'$**': 'text'});

module.exports = mongoose.model("Source", SourceSchema, "Sources");
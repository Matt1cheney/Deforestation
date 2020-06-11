const mongoose = require("mongoose")
const Schema = mongoose.Schema

const EventSchema = new Schema({
    site: {
        type: Schema.Types.ObjectId,
        ref: "Site",
        default: null
    },
    region: {
        type: Schema.Types.ObjectId,
        ref: "Region",
        default: null
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
        default: Date.now
    },
    coordinator: {
        type: Schema.Types.ObjectId,
        ref: "Person",
        default: null
    },
    description: String,
    volunteers: [{
        type: Schema.Types.ObjectId,
        ref: "Person",
        default: null
    }]
});
EventSchema.index({'$**': 'text'});

module.exports = mongoose.model("Event", EventSchema, "Events");
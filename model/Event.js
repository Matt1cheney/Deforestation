const mongoose = require("mongoose")
const Schema = mongoose.Schema

const EventSchema = new Schema({
    site: {
        type: Schema.Types.ObjectId,
        ref: "Site"
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
    volunteer: [{ type: String }]
});

module.exports = mongoose.model("Event", EventSchema, "Events");
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const EventSchema = new Schema({
        site: {
            type: Schema.Types.ObjectId,
            ref: "Site",
            default: null
        },
        date: String,
        startTime: String,
        endTime: String,
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

module.exports = mongoose.model("Event", EventSchema, "Events");
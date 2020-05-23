const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RegionSchema = new Schema({
    name: String,
    descriptor: String,
    coordinator: {
        type: Schema.Types.ObjectId,
        ref: "Person",
        default: null
    },
});

module.exports = mongoose.model("Region", RegionSchema, "Regions");
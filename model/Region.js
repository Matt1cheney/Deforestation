const mongoose = require("mongoose")
const Schema = mongoose.Schema

const RegionSchema = new Schema({
    name: String,
    description: String,
    coordinator: {
        type: Schema.Types.ObjectId,
        ref: "Person",
        default: null
    },
});

module.exports = mongoose.model("Region", RegionSchema, "Regions");
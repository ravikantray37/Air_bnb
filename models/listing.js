const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        type: String,
        default: 
            "https://unsplash.com/photos/the-sun-is-setting-over-a-small-river-FVuZ9s2X_E0",
        set: (v) => 
         v === ""
           ? "https://unsplash.com/photos/the-sun-is-setting-over-a-small-river-FVuZ9s2X_E0"
           : v,
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
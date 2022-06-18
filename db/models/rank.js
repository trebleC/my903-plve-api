const mongoose = require('mongoose')

const rankSchema = new mongoose.Schema({
    post_id: {
        type: Number,
        required: true
    },
    post_week: {
        type: Object
    },
    created_at: {
        type: Date,
    },
    post_content: {
        type: String,
    },

    post_title: {
        type: String,
    },
    post_type: {
        type: Number,
    },
    profile_id: {
        type: String,
    },
    profile_name: {
        type: String,
    },
    profile_pic_url: {
        type: String,
    },
    profile_title: {
        type: String,
    },
    publish_at: {
        type: Date,
    },
    thumbnail_image_url: {
        type: String,
    },
    updated_at: {
        type: Date,
    },
})
const rankModel = mongoose.model('rank', rankSchema)
module.exports = rankModel
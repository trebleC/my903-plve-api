const mongoose = require('mongoose')

const songsSchema = new mongoose.Schema({
    post_id:{
        type: Number,
        required: true
    },
    user_id:{
        type: Number
    },
    profile_name:{
        type: String
    },
    profile_id:{
        type: String
    },
    profile_pic_url:{
        type: String
    },
    profile_title:{
        type: String
    },
    post_type:{
        type: Number
    },
    post_title:{
        type: String
    },
    post_content:{
        type: String
    },
    status:{
        type: Number
    },
    url:{
        type: String
    },
    thumbnail_image_url:{
        type: String
    },
    created_at:{
        type: Number
    },
    updated_at:{
        type: Number
    },
    publish_at:{
        type: Number
    },
    url_category_id:{
        type: Number
    },
    url_category_name:{
        type: String
    }

})
const songsModel = mongoose.model('songs',songsSchema)
module.exports =  songsModel
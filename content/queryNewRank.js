const rankModel = require('../db/models/rank')
const queryNewRank = async (ctx, next) => {
    const res = await rankModel.find({},{_id:0,post_id:1,post_title:1,post_content:1,thumbnail_image_url:1,post_week:1}).sort({post_id:-1}).limit(1)

    ctx.body = { code: 200, data: res.map(item => {
        item.thumbnail_image_url = item.thumbnail_image_url.replace('/resource/903songtable1/image/posts','/image/rank')
        return item
    }) }

}
module.exports = queryNewRank
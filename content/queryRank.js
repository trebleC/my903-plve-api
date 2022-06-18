const rankModel = require('../db/models/rank')
const queryRank = async (ctx, next) => {
    let query = {}
    ctx.request.query.week ? query['post_week.week'] = parseInt(ctx.request.query.week) : null
    ctx.request.query.year ? query['post_week.year'] = ctx.request.query.year : null


    const res = await rankModel.find(query, { _id: 0, post_id: 1, post_title: 1, post_content: 1, thumbnail_image_url: 1, post_week: 1 })
    let data = JSON.parse(JSON.stringify(res)).map(item => {
        item.thumbnail_image_url = item.thumbnail_image_url.replace('/resource/903songtable1/image/posts', '/image/rank')
        return item

    })
    ctx.body = { code: 200, data }

}
module.exports = queryRank
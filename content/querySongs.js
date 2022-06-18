const songsModel = require('../db/models/songs')
const querySongs = async (ctx, next) => {
   
    const res = await songsModel.find({},{_id:0,post_id:1,post_title:1,thumbnail_image_url:1,post_content:1})

    ctx.body = { code: 200, data: JSON.parse(JSON.stringify(res)).map(item => {
        item.thumbnail_image_url = item.thumbnail_image_url.replace('/resource/903Newsongs/image/posts','/image/song')
        item.lyric = item.post_content.split('\n')
        .map(ly => {
            ly = ly.replace(/<[^>]+>/g,'').replace('&nbsp;','')
            return ly
        })
        return item
    })}

}
module.exports = querySongs
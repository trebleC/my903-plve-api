const { resourceURL } = require('../config')
const getSongList = require('../api/getSongList')
const { resolve } = require('path')
const download = require('download')
const songsModel = require('../db/models/songs')

const getSongs = async (ctx, next) => {

    const res = await getSongList({
        pageNo: ctx.request.query.pageNo || 0
    })

    res.data["posts"].map(item => {
        songsModel.findOne({ post_id: item.post_id }, '', function (err, doc) {
            if (!err && !doc) {
                songsModel
                    .create({ ...item })
                    .catch(_err => {
                        ctx.body = { code: 400, msg: '新增异常' }
                    })
            }
        })
    })

    const posters = res.data["posts"].map(item => {
        return resourceURL + item.thumbnail_image_url
    })
    //下载图片
    await Promise.all(posters.map(url => download(url, resolve(__dirname, "../image/song"))));

    ctx.body = { code: 200, data: res.data["posts"] }


}

module.exports = getSongs
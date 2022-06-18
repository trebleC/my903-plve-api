const { resourceURL } = require('../config')
const getRank = require('../api/getRank')
const { resolve } = require('path')
const download = require('download')
const rankModel = require('../db/models/rank')
const { ChineseToNumber } = require('../utils')
const getSongs = async (ctx, next) => {

    const res = await getRank({
        pageNo: ctx.request.query.pageNo || 0
    })

    res.data["posts"].map(item => {
        item.post_week = {
            year: item.post_title.split('年')[0],
            week: ChineseToNumber(item.post_title.split('年')[1].replace(/(第|周)/g, '')),
        }
        rankModel.findOne({ post_id: item.post_id }, '', function (err, doc) {
            if (!err && !doc) {
                rankModel
                    .create({
                        ...item
                    })
                    .catch(_err => {
                        ctx.body = { code: 400, msg: '新增异常' }
                    })
            }
        })
        return item
    })

    const posters = res.data["posts"].map(item => {
        return resourceURL + item.thumbnail_image_url
    })
    //下载图片
    await Promise.all(posters.map(url => download(url, resolve(__dirname, "../image/rank"))));

    ctx.body = { code: 200, data: res.data["posts"] }


}

module.exports = getSongs
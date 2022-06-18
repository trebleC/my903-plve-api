
const {request} = require('../utils/request')
const qs = require('qs');
const getSongList = function({pageNo = 0}){
    return request({
        method:'post',
        url:'/api/post',
        data: qs.stringify({
            "page":pageNo,
            "profile_id":'903Newsongs',
            "post_type":0
        }),
    })
}
module.exports = getSongList
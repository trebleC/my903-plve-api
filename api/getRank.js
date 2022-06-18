
const {request} = require('../utils/request')
const qs = require('qs');
const getRank = function({pageNo = 0}){
    return request({
        method:'post',
        url:'/api/post',
        data: qs.stringify({
            "page":pageNo,
            "profile_id":'903songtable1',
            "post_type":0
        }),
    })
}

module.exports = getRank
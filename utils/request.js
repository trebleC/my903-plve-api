const axios = require('axios')
const { baseURL } = require('../config')
exports.request = function(config){
    const instance = axios.create({
        baseURL,
        // proxy:{
        //     host: 'localhost',
        //     port: 7890,
        // }
    })

    instance.interceptors.request.use((config) => {
        return config
    })

    instance.interceptors.response.use(res => {
        return res.data
    })

    return instance(config)
}
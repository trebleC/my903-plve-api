const mongoose = require('mongoose')

const mongoConnect = async () => {
    await mongoose
        .connect('mongodb://0.0.0.0:270171/my903', { useNewUrlParser: true })
        .then(() => {
            console.log('数据库连接成功')
        })
        .catch(err => {
            // console.log('数据库连接失败', err)
        })
}

module.exports = mongoConnect
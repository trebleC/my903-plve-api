const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const fs = require('fs');
const path = require('path');
const mime = require('mime-types'); //需npm安装

const index = require('./routes/index')
const mongoConnect = require('./db')
mongoConnect()
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.use(async (ctx) => {
  
	let filePath = path.join(__dirname, ctx.url); //图片地址
	let file = null;
	try {
	    file = fs.readFileSync(filePath); //读取文件
	} catch (error) {
		//如果服务器不存在请求的图片，返回默认图片
	    filePath = path.join(__dirname, '/images/default.png'); //默认图片地址
	    file = fs.readFileSync(filePath); //读取文件	    
	}

	let mimeType = mime.lookup(filePath); //读取图片文件类型
	ctx.set('content-type', mimeType); //设置返回类型
	ctx.body = file; //返回图片

});

module.exports = app

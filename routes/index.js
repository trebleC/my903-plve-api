

const { getSongs, querySongs, getRank, queryRank, queryNewRank } = require('../content')

const { ChineseToNumber } = require('../utils')

const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})


router.get('/songs', getSongs)
router.get('/querySongs', querySongs)

router.get('/rank', getRank)
router.get('/queryRank', queryRank)
router.get('/queryNewRank',queryNewRank)

router.get('/lyric', (ctx) => {
  let html = "<p>第十位 (-) 小心地滑 － MC張天賦<br />第十一位 (16) Long D - 陳凱詠<br />第十二位 (13) 留一天與你喘息 -陳卓賢<br />第十三位 (14) Mr. Stranger - 盧瀚霆<br />第十四位 (3) 醫生我無病 － 藍奕邦 Featuring : Matt Force<br />第十五位 (18) 多謝恐懼 - 陳明憙<br />第十六位 (8) 留班同學 - 黃明德<br />第十七位 (-) 明天世界或到末日 － Kowloon K<br />第十八位 (-) 玩物喪偶 － ToNick<br />第十九位 (-) 瘟疫在愛蔓延時 － 區子琳<br />第二十位 (17) 幕後花絮 - 應智越</p>"
  html = html.replace('<p>', '').replace('</p>', '').split('<br />')
  html = html.map(item => {

    item = {
      html_item:item,
      name:item.match(/\)(.)+(\-|－)/g)[0].replace(/\s(\-|－)/g,'').replace(/\)\s/g,''),
      singer:item.match(/(\-|－)([^(\-\))])+/g)[0].replace(/(\-|－)\s?/g,''),
      rank:ChineseToNumber(item.match(/第(\S)*位/g)[0].replace('第', '').replace('位', '')),
      rank_last_week:item.match(/\(([\d\-]*\))/g)[0].replace('(', '').replace(')', '')
    }
    return item
  })
  ctx.body = { code: 200, data: html }
})
module.exports = router

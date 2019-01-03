var Koa = require('koa')
var router = require('koa-router')()

const app = new Koa()

// router.get('/', async (ctx) => {
//     ctx.body = 'hello koa !'
// });

// router.get('/api', async (ctx) => {
//     ctx.body = 'test data'
// });

// 首页 —— 广告（超值特惠）
var homeAdData = require('./home/ad.js')
router.get('/api/homead', async (ctx) => {
    ctx.body = homeAdData
});

// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('./home/list.js')
router.get('/api/homelist/:city/:page', async (ctx) => {
    // 参数
    const params = ctx.params
    const paramsCity = params.city
    const paramsPage = params.page

    console.log('当前城市：' + paramsCity)
    console.log('当前页数：' + paramsPage)

    ctx.body = homeListData
});



// 开始服务并生成路由
app.use(router.routes())
app.use(router.allowedMethods());
app.listen(4000, () => {
    console.log('server run start');
});

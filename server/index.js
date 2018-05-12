const Koa = require('koa')
const app = new Koa
const views = require('koa-views')
const { resolve } = require('path')
app.use(views(resolve(__dirname, './views'), {
    extension: 'pug'
}))
app.use(async (ctx, next) => {
    await ctx.render('index', {
        you: 'zzw',
        me: 'shz'
    })
    ctx.type = 'text/html; charset = utf-8'
})

app.listen(2333)
const Telegraf = require('telegraf');
const startAction = require('./zhangsana/start')
const inlineAction = require('./zhangsana/inline')
const bot = new Telegraf(process.env.ZHANGSAN_BOT_TOKEN);

bot.start(ctx => {
return startAction(ctx)
})

bot.on('inline_query', (ctx) => {
return inlineAction(ctx)
})

exports.handler = async event => {
await bot.handleUpdate(JSON.parse(event.body));
return { statusCode: 200, body: '' };
}
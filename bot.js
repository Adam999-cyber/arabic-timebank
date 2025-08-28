const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply('🕒 أهلًا بك في بنك الوقت!');
});

// أضف المزيد من الأوامر هنا لاحقًا

bot.launch({
  webhook: {
    domain: process.env.WEBHOOK_URL,
    port: process.env.PORT
  }
});

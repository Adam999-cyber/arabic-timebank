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
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('✅ نظام بنك الوقت يعمل بنجاح!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

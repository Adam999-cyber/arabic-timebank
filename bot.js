const { Telegraf } = require('telegraf');
const express = require('express');

// تهيئة البوت
const bot = new Telegraf(process.env.BOT_TOKEN);

// الأمر الأساسي
bot.start((ctx) => {
  ctx.reply('🕒 أهلًا بك في بنك الوقت!');
});

// تهيئة السيرفر
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('✅ نظام بنك الوقت يعمل بنجاح!');
});

// تشغيل كل شيء
app.listen(port, () => {
  console.log(`🟢 السيرفر يعمل على المنفذ ${port}`);
  bot.launch().then(() => {
    console.log('🟢 بوت التيليجرام يعمل!');
  });
});

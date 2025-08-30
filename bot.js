const express = require('express');
const { Telegraf } = require('telegraf');

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);
const port = process.env.PORT || 3000;

// Middleware أساسي
app.use(express.json());

// Route رئيسي
app.get('/', (req, res) => {
  res.send('✅ نظام بنك الوقت يعمل بنجاح!');
});

// Webhook للبوت
app.post('/api/webhook', (req, res) => {
  try {
    bot.handleUpdate(req.body, res);
    res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(200).send('OK');
  }
});

// أمر Start للبوت
bot.start((ctx) => {
  ctx.reply('🕒 أهلًا بك في بنك الوقت!');
});

// تشغيل الخادم
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
  console.log(`✅ Bot is ready`);
});

// التصدير للتطوير المحلي
module.exports = app;
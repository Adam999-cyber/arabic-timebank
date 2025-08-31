// بنك الوقت - نظام إدارة الوقت عبر تليجرام

// إعدادات البوت
const BOT_TOKEN = "ضع_توكن_البوت_هنا";
const GEMINI_KEY = "ضع_مفتاح_Gemini_هنا"; 
const SHEET_URL = "https://docs.google.com/spreadsheets/d/1YJdoyPjRdEmMq7M7issDNeMQ58EBz8dS6-MSA9wuuNU/edit";

// مكتبات مطلوبة
const express = require('express');
const { Telegraf } = require('telegraf');

// إنشاء التطبيق والبوت
const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN || BOT_TOKEN);
const port = process.env.PORT || 3000;

// إعدادات أساسية
app.use(express.json());

// الصفحة الرئيسية
app.get('/', (req, res) => {
  res.send('بنك الوقت يعمل بنجاح');
});

// webhook للبوت
app.post('/api/webhook', (req, res) => {
  try {
    bot.handleUpdate(req.body, res);
    res.status(200).send('OK');
  } catch (error) {
    console.error('خطأ في webhook:', error);
    res.status(200).send('OK');
  }
});

// أوامر البوت
bot.start((ctx) => {
  ctx.reply('أهلا بك في بنك الوقت');
});

bot.help((ctx) => {
  ctx.reply('مساعدة بنك الوقت');
});

// تشغيل الخادم
app.listen(port, () => {
  console.log('الخادم يعمل على المنفذ', port);
  console.log('البوت جاهز');
});

// تصدير للاستخدام
module.exports = app;
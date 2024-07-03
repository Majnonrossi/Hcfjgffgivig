import fetch from 'node-fetch';

// ذاكرة مؤقتة لتخزين سجل المحادثات
let conversationHistory = {};

// المعالج الرئيسي
var handler = async (m, { text, usedPrefix, command }) => {
  // تحقق مما إذا كان النص يبدأ بنقطة
  if (text.startsWith('.')) {
    return; // تجاهل الرسالة
  }

  if (!text) {
    return m.conn.reply(m.chat, `🎌 *أدخل طلبًا*\n\nمثال: hi jeen`, m, fake);
  }

  try {
    m.conn.sendPresenceUpdate('composing', m.chat);

    // إضافة الرسالة الجديدة إلى سجل المحادثة الخاصة بالمستخدم
    if (!conversationHistory[m.chat]) {
      conversationHistory[m.chat] = [];
    }
    conversationHistory[m.chat].push({ role: 'user', content: text });

    // تحضير سجل المحادثة لطلب الـ API
    const conversation = conversationHistory[m.chat].map(msg => msg.content).join('\n');

    // استدعاء الـ API بسجل المحادثة الكامل
    var apii = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${conversation}`);
    var res = await apii.json();

    // إضافة رد البوت إلى سجل المحادثة
    conversationHistory[m.chat].push({ role: 'bot', content: res.data });

    // إرسال الرد إلى المستخدم
    await m.reply(res.data);
  } catch (error) {
    console.error(error);
    return m.conn.reply(m.chat, `*🚩 حدث خطأ*`, m, fake);
  }
};

// هذا الجزء هو المعالج المصحح لجميع الرسائل
handler.all = async (m) => {
  await handler(m, { text: m.text, usedPrefix: m.usedPrefix, command: m.command });
};

export default handler;
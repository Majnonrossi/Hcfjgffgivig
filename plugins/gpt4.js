import fetch from 'node-fetch';
import fs from 'fs/promises'; // استيراد مكتبة fs للعمليات على الملفات

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    return m.conn.reply(m.chat, `🎌 *Ingresé una petición*\n\nEx: hi jeen`, m, fake);
  }

  try {
    m.conn.sendPresenceUpdate('composing', m.chat);
    var apii = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${text}`);
    var res = await apii.json();
    await m.reply(res.data);

    // حفظ الرسالة في ملف JSON
    var conversationLog = {
      user: m.sender,
      message: text,
      response: res.data,
      timestamp: Date.now()
    };

    // قراءة السجل الحالي من الملف
    var currentLog = await fs.readFile('abdo.json', 'utf-8').catch(() => '[]');
    var logs = JSON.parse(currentLog);
    logs.push(conversationLog);

    // كتابة السجل الجديد إلى الملف
    await fs.writeFile('abdo.json', JSON.stringify(logs, null, 2));
  } catch (error) {
    console.error(error);
    return m.conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, fake);
  }
};

// This part is the corrected handler for all messages
handler.all = async (m) => {
  await handler(m, { text: m.text, usedPrefix: m.usedPrefix, command: m.command });
};

export default handler;

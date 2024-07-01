import fetch from 'node-fetch';

// إنشاء ذاكرة مؤقتة لتخزين المحادثات والأسماء
let conversations = {};

// دالة لترجمة النص إلى الدارجة المغربية (يمكنك استخدام مكتبة ترجمة هنا)
const translateToDarija = async (text) => {
  // هنا يمكنك إضافة منطق الترجمة إلى الدارجة المغربية
  // في هذا المثال، نفترض أن النص مدخل أصلاً بالدارجة المغربية
  return text;
};

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    return m.conn.reply(m.chat, `🎌 *Ingresé una petición*\n\nEx: hi jeen`, m, fake);
  }

  try {
    m.conn.sendPresenceUpdate('composing', m.chat);

    // ترجمة النص إلى الدارجة المغربية
    const translatedText = await translateToDarija(text);

    // إرسال الطلب إلى API ChatGPT
    var apii = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${translatedText}`);
    var res = await apii.json();
    let responseText = res.data;

    // حفظ المحادثة
    if (!conversations[m.sender]) {
      conversations[m.sender] = [];
    }
    conversations[m.sender].push({ text, response: responseText });

    await m.reply(responseText);
  } catch (error) {
    console.error(error);
    return m.conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, fake);
  }
};

// دالة للتعامل مع جميع الرسائل
handler.all = async (m) => {
  const userName = m.sender.split('@')[0]; // استخراج اسم المستخدم
  const previousConversations = conversations[m.sender] || [];
  
  let introduction = `مرحبا ${userName}! كيف يمكنني مساعدتك اليوم؟`;

  if (previousConversations.length > 0) {
    introduction = `مرحبا مجددا ${userName}! تذكرت أنني تحدثت معك من قبل. كيف يمكنني مساعدتك اليوم؟`;
  }

  await m.conn.reply(m.chat, introduction, m, fake);
  await handler(m, { text: m.text, usedPrefix: m.usedPrefix, command: m.command });
};

export default handler;

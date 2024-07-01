import fetch from 'node-fetch';
import fs from 'fs';

var handler = async (m, { text }) => {
  if (!text) {
    return m.reply(`🎌 *Ingrese una solicitud*\n\nEjemplo: hi jeen`);
  }

  try {
    m.reply(`تابعني:instagram.com/majnon._.98`);
    var apii = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${encodeURIComponent(text)}`);
    var res = await apii.json();
    
    // إرسال الإجابة فقط
    await m.reply(res.data);

    // حفظ المحادثة في ملف JSON
    saveConversation(m.chat, m.sender, m.text, res.data);
  } catch (error) {
    console.error(error);
    return m.reply(`*🚩 Ocurrió un error*`);
  }
};

// دالة لحفظ المحادثة في ملف JSON
function saveConversation(chatId, userId, request, response) {
  const conversation = {
    userId: userId,
    request: request,
    response: response,
    timestamp: new Date().toISOString()
  };

  const conversationsFile = 'abdo.json';

  // قراءة الملف الحالي إذا كان موجوداً، وإضافة المحادثة الجديدة
  let conversations = {};
  if (fs.existsSync(conversationsFile)) {
    conversations = JSON.parse(fs.readFileSync(conversationsFile));
  }

  // تحقق من وجود سجل للمستخدم وإضافة المحادثة الجديدة
  if (!conversations[chatId]) {
    conversations[chatId] = [];
  }
  conversations[chatId].push(conversation);

  // كتابة المحادثات المحدثة إلى الملف
  fs.writeFileSync(conversationsFile, JSON.stringify(conversations, null, 2));
}

// هذا الجزء هو المعالج المعدل لجميع الرسائل
handler.all = async (m) => {
  await handler(m, { text: m.text });
};

export default handler;

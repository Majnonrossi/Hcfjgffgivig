import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

// مسار الملف الذي سيحفظ فيه المحادثات
const conversationsFilePath = path.join(__dirname, 'abdo.json');

// تحميل المحادثات من الملف
const loadConversations = () => {
  try {
    const data = fs.readFileSync(conversationsFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading conversations:', error);
    return {};
  }
};

// حفظ المحادثات في الملف
const saveConversations = (conversations) => {
  try {
    fs.writeFileSync(conversationsFilePath, JSON.stringify(conversations, null, 2));
  } catch (error) {
    console.error('Error saving conversations:', error);
  }
};

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    return m.conn.reply(m.chat, `🎌 *Ingresé una petición*\n\nEx: hi jeen`, m, fake);
  }

  try {
    m.conn.sendPresenceUpdate('composing', m.chat);

    // تحميل المحادثات السابقة
    const conversations = loadConversations();
    const chatHistory = conversations[m.chat] || [];

    // تحديد سياق المحادثة السابقة
    let context = chatHistory.slice(-10).map(entry => `User: ${entry.message}\nBot: ${entry.response}`).join('\n');

    const apii = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${text}&context=${context}`);
    const res = await apii.json();
    await m.reply(res.data);

    // حفظ المحادثة الحالية
    chatHistory.push({ message: text, response: res.data });
    conversations[m.chat] = chatHistory;
    saveConversations(conversations);

  } catch (error) {
    console.error('Error handling message:', error);
    return m.conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, fake);
  }
};

// This part is the corrected handler for all messages
handler.all = async (m) => {
  await handler(m, { text: m.text, usedPrefix: m.usedPrefix, command: m.command });
};

export default handler;

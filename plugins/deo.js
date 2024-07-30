import fs from 'fs';
import { webcrack } from 'webcrack';

let handler = async (m, { conn, text }) => {
  if (!text) throw `اكتب الأمر متبوع بالكود الذي تود فك تشفيره`;

  try {
    let result = await webcrack(text);

    if (result && result.code) {
      m.reply(result.code);
    } else {
      throw new Error('Failed to deobfuscate the code.');
    }
  } catch (e) {
    console.error(e);

    // Provide a more descriptive error message to the user
    if (e.message.includes('Failed to deobfuscate the code')) {
      throw "*لم يتم فك تشفير الكود. يرجى التحقق من صحة الكود المدخل.*";
    } else {
      throw "*حدث خطأ أثناء فك التشفير. يرجى المحاولة مرة أخرى لاحقًا.*";
    }
  }
};

handler.help = ["deobfuscator"];
handler.tags = ["tools"];
handler.command = /^deo$/i;

export default handler;
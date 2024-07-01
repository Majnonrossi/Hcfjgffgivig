import fetch from 'node-fetch';
import fs from 'fs';

var handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    return m.reply(`🎌 *Ingrese una solicitud*\n\nEjemplo: hi jeen`);
  }

  try {
    m.reply(`Espera un momento, estoy procesando tu solicitud...`);
    var apii = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${encodeURIComponent(text)}`);
    var res = await apii.json();
    await m.reply(res.data);

    // Guardar la conversación en un archivo abdo.json
    saveConversation(m.text, res.data);
  } catch (error) {
    console.error(error);
    return m.reply(`*🚩 Ocurrió un error*`);
  }
};

// Función para guardar la conversación en un archivo
function saveConversation(request, response) {
  const conversation = {
    request: request,
    response: response,
    timestamp: new Date().toISOString()
  };

  const conversationsFile = 'abdo.json';

  // Leer el archivo actual (si existe) y agregar la nueva conversación
  let conversations = [];
  if (fs.existsSync(conversationsFile)) {
    conversations = JSON.parse(fs.readFileSync(conversationsFile));
  }
  conversations.push(conversation);

  // Escribir las conversaciones actualizadas en el archivo
  fs.writeFileSync(conversationsFile, JSON.stringify(conversations, null, 2));
}

// Esta parte es el manejador corregido para todos los mensajes
handler.all = async (m) => {
  await handler(m, { text: m.text, usedPrefix: m.usedPrefix, command: m.command });
};

export default handler;

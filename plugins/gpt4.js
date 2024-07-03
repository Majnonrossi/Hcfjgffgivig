import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `🎌 *Ingresé una petición*\n\nEjemplo, !bard Conoces CuriosityBot-MD?`, m, fake, )
 
try {

conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${text}`)
var res = await apii.json()
await m.reply(res.data)

} catch (error) {
console.error(error)
return conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, fake, )
}

}
handler.all = async (m) => {
  await handler(m, { text: m.text, usedPrefix: m.usedPrefix, command: m.command });
};

export default handler;
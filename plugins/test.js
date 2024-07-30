import fetch from 'node-fetch';
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let user = global.db.data.users[m.sender]
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let menu = `
┏━━━━━━━━━━┓
┣ *Hello , ${taguser}*
┗━━━━━━━━━━┛
┏━━━━━━━━━━┓
┣ ඬ⃟ 🤖 _${usedPrefix}apk_
┣ ඬ⃟ 🤖 _${usedPrefix}ig_
┣ ඬ⃟ 🤖 _${usedPrefix}pinterest_
┣ ඬ⃟ 🤖 _${usedPrefix}ai_
┣ ඬ⃟ 🤖 _${usedPrefix}play_
┣ ඬ⃟ 🤖 _${usedPrefix}play2_
┣ ඬ⃟ 🤖 _${usedPrefix}fb_
┣ ඬ⃟ 🤖 _${usedPrefix}imagen_
┣ ඬ⃟ 🤖 _${usedPrefix}tiktok_
┣ ඬ⃟ 🤖 _${usedPrefix}owner_
┣ ඬ⃟ 🤖 _${usedPrefix}sticker_
┣ ඬ⃟ 🤖 _${usedPrefix}translate_
┣ ඬ⃟ 🤖 _${usedPrefix}tourl_
┣ ඬ⃟ 🤖 _${usedPrefix}hd_
┗━━━━━━━━━┛


┏━━━━━━━━━━┓
┣ Group Commnds
┣ ඬ⃟ 🤖 _${usedPrefix}kick_
┣ ඬ⃟ 🤖 _${usedPrefix}add_
┣ ඬ⃟ 🤖 _${usedPrefix}tagall_
┗━━━━━━━━━━┛`.trim()
conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
}
handler.help = ['menu', 'help', '?']
handler.tags = ['general']
handler.command = /^(test|\?)$/i
export default handler;
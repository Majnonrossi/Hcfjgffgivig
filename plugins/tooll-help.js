import fetch from 'node-fetch';
import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206)
    const readMore = more.repeat(4001)
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    m.react('📚');
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `\n▢ *hello,* ${taguser}\n\n_*< Your Accounte />*_\n\n▢ *Level :* ${level}\n▢ *Exp :* ${exp}\n▢ *Diamantes :* ${limit}\n▢ *Premium :* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌')}\n▢ *Registrado :* ${user.registered === true ? '✅' : '❌'}\n%readMore\n\n_*< Bot Commnds />*_\n\n▢ _/jadibot_\n▢ _/listjadibot_\n▢ _/deletesesion_\n▢ _/runtime_\n▢ _/ping_\n\n_*< Premium Commnds />*_\n\n▢ _/apk_\n▢ _/obb_\n▢ _/imganime2_\n▢ _/imagine2_\n▢ _/fb_\n▢ _/2ytmp4_\n▢ _/2ytmp4_\n\n_*< downloade Commnds />*_\n\n▢ _/play_\n▢ _/ytmp3_\n▢ _/ytmp4_\n▢ _/yts_\n▢ _/ig_\n▢ _/img_\n▢ _/tiktok_\n\n_*< Ai Commnds />*_\n\n▢ _/imagine_\n▢ _/imganime_\n▢ _/hdr_\n▢ _/bard_\n▢ _/bard2 (beta)_\n▢ _/bardimg_\n▢ _/ai_\n▢ _/chatgpt_\n▢ _/hdr_\n▢ _/ocr_\n▢ _/tr <code>_\n▢ _/cuturl_\n\n_*< Islamic Commnds />*_\n\n▢ _/ayati_\n▢ _/adhan_\n\n_*< Accounte Commnds />*_\n\n▢ _/make-account_\n▢ _/serie_\n▢ _/del-account_\n▢ _/transfer_\n▢ _/info_\n▢ _/buy_\n▢ _/levelup_\n▢ _/gift_\n\n_*< Other Commnds />*_\n\n▢ _/infobot_\n▢ _/math_`.trim().replace('%readMore', readMore);


    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      // ... الجزء الذي بدأت في كتابته
      conn.sendMessage(m.chat, {image: await genProfile(conn, m), caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: await genProfile(conn, m), caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});

    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|help|\?)$/i;

export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
async function genProfile(conn, m) {
  let font = await jimp.loadFont('./names.fnt'),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    welcome = await jimp.read(thumbnailUrl.getRandom()),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

    await avatar.resize(460, 460)
    await mask.resize(460, 460)
    await avatar.mask(mask)
    await welcome.resize(welcome.getWidth(), welcome.getHeight())

    await welcome.print(font, 550, 180, 'Name:')
    await welcome.print(font, 650, 255, m.pushName.slice(0, 25))
    await welcome.print(font, 550, 340, 'About:')
    await welcome.print(font, 650, 415, status)
    await welcome.print(font, 550, 500, 'Number:')
    await welcome.print(font, 650, 575, PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'))
    return await welcome.composite(avatar, 50, 170).getBufferAsync('image/png')
}
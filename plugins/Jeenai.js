import _0x5a033e from "node-fetch";
const handler = async (_0x21a7ae, {
  text: _0x4ecf54,
  usedPrefix: _0x4c148d,
  command: _0x28023d
}) => {
  if (!_0x4ecf54) {
    throw "مثال„ :\n\n*.openai hello*";
  }
  const _0x14c562 = "Hi I am Jeen Whatsapp Bot Developed by majnon and ayoub, My name is Jeen bot, I was created by ayoub x5 and majnon._.98 with unparalleled perfection, If you want to know more about my owner Visit https://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K";
  await _0x21a7ae.reply(wait);
  const _0x534daa = await _0x5a033e("https://api.betabotz.eu.org/api/search/openai-logic?text=" + _0x4ecf54 + "&logic=" + _0x14c562 + "&apikey=ZnGvIADT");
  const _0x3f454e = await _0x534daa.json();
  try {
    await _0x21a7ae.reply(_0x3f454e.message);
  } catch (_0x58d89e) {
    _0x21a7ae.reply("حدث خطا");
  }
};
handler.command = handler.help = ["ai","Jeenai"];
handler.tags = ["ai"];
handler.premium = false;
export default handler;

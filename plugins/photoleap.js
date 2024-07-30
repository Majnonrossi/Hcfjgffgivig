import _0x355fd8 from "axios";
let handler = async (_0x7c0d90, {
  conn: _0xd6c9f0,
  args: _0x26bedc,
  usedPrefix: _0x2a12f3,
  command: _0x44fb6b
}) => {
  let _0x2de0ef;
  if (_0x26bedc.length >= 1) {
    _0x2de0ef = _0x26bedc.slice(0).join(" ");
  } else if (_0x7c0d90.quoted && _0x7c0d90.quoted.text) {
    _0x2de0ef = _0x7c0d90.quoted.text;
  } else {
    throw "الذكاء الاصطناعي : يمكنك ان تتخيل اي صورة ثم اطلب من البوت ان يرسمها مثال نكتب له ان يتخيل صورة فتاة تلعب مع قطة نكتب هكذا : \n\n*.photoleap* girl play with black cat";
  }
  await _0x7c0d90.reply("> انتظر ....");
  try {
    let _0x5a90f9 = await textToImage(_0x2de0ef);
    if (_0x5a90f9) {
      await _0xd6c9f0.sendFile(_0x7c0d90.chat, _0x5a90f9.result_url, "", "\nصــورة لـــ:\n " + _0x2de0ef, _0x7c0d90, false, {
        mentions: [_0x7c0d90.sender]
      });
    }
  } catch (_0x3d9139) {
    await _0x7c0d90.reply("وقعت مشكلة♥");
  }
};
handler.help = ["photoleap"];
handler.tags = ["drawing"];
handler.command = /^(photoleap)$/i;
handler.premium = false;
export default handler;
async function textToImage(_0x5993d2) {
  try {
    const {
      data: _0x42f739
    } = await _0x355fd8.get("https://tti.photoleapapp.com/api/v1/generate?prompt=" + _0x5993d2);
    return _0x42f739;
  } catch (_0x2860d2) {
    return null;
  }
}
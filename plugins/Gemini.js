import _0x4704bd from "gemini-ai";
let handler = async (_0x186a2c, {
  conn: _0x50d7f6,
  args: _0x3f907f
}) => {
  const _0x2ef6b4 = _0x3f907f.join` `;
  if (!_0x2ef6b4) {
    return _0x50d7f6.reply(_0x186a2c.chat, "*example :\n\n*.gemini* hi", _0x186a2c);
  }
  const _0x315ac0 = new _0x4704bd("AIzaSyAUsz6CEsTfOw3CgecJGtbzkBNnKBXy2tI");
  const _0x5fbefc = _0x315ac0.createChat();
  let _0x10c283 = await _0x5fbefc.ask(_0x2ef6b4);
  console.log(_0x10c283);
  _0x50d7f6.reply(_0x186a2c.chat, _0x10c283, _0x186a2c);
};
handler.help = ["gemini"];
handler.tags = ["ai"];
handler.command = /^gemini?$/i;
export default handler;

import _0x2eeb8a from "node-fetch";
import _0x4d4ff1 from "google-it";
let handler = async (_0x34b7d2, {
  conn: _0x25b34b,
  command: _0x52d9b6,
  args: _0x1fcf12
}) => {
  let _0x5dbaf3 = /f$/i.test(_0x52d9b6);
  let _0x54a453 = _0x1fcf12.join` `;
  if (!_0x54a453) {
    return _0x25b34b.reply(_0x34b7d2.chat, "مثال„ \n*.google2 cat*", _0x34b7d2);
  }
  let _0x2fc108 = "https://google.com/search?q=" + encodeURIComponent(_0x54a453);
  const _0x3a9ae1 = {
    query: _0x54a453
  };
  let _0x532472 = await _0x4d4ff1(_0x3a9ae1);
  let _0x530bd2 = _0x532472.map(({
    title: _0x5f1320,
    link: _0x1666d5,
    snippet: _0x2a6389
  }) => {
    return "*" + _0x5f1320 + "*\n_" + _0x1666d5 + "_\n_" + _0x2a6389 + "_";
  }).join`\n\n`;
  try {
    var _0x4ef459 = "https://telegra.ph/file/cf62f2b8648a352548978.jpg";
    _0x25b34b.sendFile(_0x34b7d2.chat, _0x4ef459, "logos.jpg", _0x2fc108 + "\n\n" + _0x530bd2, _0x34b7d2);
  } catch (_0x1b0273) {
    _0x34b7d2.reply(_0x530bd2);
  }
};
handler.help = ["google"];
handler.tags = ["search"];
handler.command = /^google$/i;
export default handler;
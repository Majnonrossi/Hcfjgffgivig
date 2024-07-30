import _0x4cb9b4 from "node-fetch";
let handler = async (_0x266a21, {
  conn: _0x377ea8,
  args: _0x1ca551
}) => {
  let _0x5015e6 = _0x1ca551.join(" ").split("|");
  if (!_0x1ca551[0]) {
    throw "مثال :\n*.logo* jeen";
  }
  _0x266a21.reply("_انتظر قليلا..._");
  let _0x130562 = "https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=" + _0x5015e6[0];
  _0x377ea8.sendFile(_0x266a21.chat, _0x130562, "jeen.jpg", "", _0x266a21, false);
};
handler.help = ["logo"];
handler.tags = ["tools"];
handler.command = /^(logo)$/i;
export default handler;
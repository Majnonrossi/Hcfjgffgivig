import _0x82d952 from "../lib/uploadImage.js";
import _0x5bb2d4 from "axios";
let handler = async (_0x5a87c9, {
  conn: _0x9d30c3,
  text: _0x368076
}) => {
  if (!_0x368076) {
    return _0x5a87c9.reply("المرجو للاشارة لصورة ما + اكتب ماذا تريد من البوت ان يشرحه لك في تلك الصورة مثال بعد اشارتك للصورة اكتب :\n*.geminipro ماذا يوجد في هذه الصورة ?* ");
  }
  let _0x1d8403 = _0x5a87c9.quoted ? _0x5a87c9.quoted : _0x5a87c9;
  if (!/image/gi.test(_0x1d8403.mtype)) {
    return _0x5a87c9.reply("المرجو للاشارة لصورة ما + اكتب ماذا تريد من البوت ان يشرحه لك في تلك الصورة مثال بعد اشارتك للصورة اكتب :\n*.geminipro ماذا يوجد في هذه الصورة ?*");
  }
  let _0x318db7 = await _0x82d952(await _0x1d8403.download());
  let _0x1cd352 = "https://api.onesytex.my.id/api/gemini-vision?text=" + _0x368076 + "&url=" + _0x318db7;
  const {
    data: _0x23367e
  } = await _0x5bb2d4.get(_0x1cd352);
  _0x5a87c9.reply(_0x23367e.result.data);
};
handler.command = /^geminipro$/i;
handler.help = ["geminipro"];
handler.tags = ["ai"];
export default handler;
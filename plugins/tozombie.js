import _0x1defcd from "node-fetch";
import { FormData, Blob } from "formdata-node";
import { fileTypeFromBuffer } from "file-type";
let handler = async (_0x5637a6, {
  command: _0x13d22c,
  usedPrefix: _0x202d5d,
  conn: _0x196974,
  text: _0x1daeac,
  args: _0x2866c9
}) => {
  let _0x47a522 = _0x5637a6.quoted ? _0x5637a6.quoted : _0x5637a6;
  let _0x545383 = (_0x47a522.msg || _0x47a522).mimetype || "";
  if (!_0x545383) {
    throw "أشر الصورة و اكتب  \n*tozombie*";
  }
  let _0x3b9546 = await _0x47a522.download();
  const _0x507535 = await ToZombi(_0x3b9546);
  if (!_0x507535) {
    throw "خطا.";
  }
  const _0x2d087c = "@" + _0x5637a6.sender.split("@")[0];
  return _0x196974.sendMessage(_0x5637a6.chat, {
    image: _0x507535,
    caption: "تابعني هنا\nhttps://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K",
    mentions: [_0x5637a6.sender]
  }, {
    quoted: _0x5637a6
  });
};
handler.help = ["tozombie"];
handler.tags = ["image-edit"];
handler.command = /^(tozombie)$/i;
export default handler;
async function ToZombi(_0x1a5f37) {
  try {
    const {
      ext: _0x15c44b,
      mime: _0x24045a
    } = (await fileTypeFromBuffer(_0x1a5f37)) || {};
    if (!_0x15c44b || !_0x24045a) {
      return null;
    }
    let _0xee2779 = new FormData();
    const _0x5e0336 = {
      type: _0x24045a
    };
    const _0x8fe462 = new Blob([_0x1a5f37.toArrayBuffer()], _0x5e0336);
    _0xee2779.append("image", _0x8fe462, "image." + _0x15c44b);
    const _0x5863fe = await _0x1defcd("https://deepgrave-image-processor-no7pxf7mmq-uc.a.run.app/transform_in_place", {
      method: "POST",
      body: _0xee2779
    });
    if (!_0x5863fe.ok) {
      throw new Error("Request failed with status code " + _0x5863fe.status);
    }
    const _0x61f2 = await _0x5863fe.text();
    return Buffer.from(_0x61f2, "base64");
  } catch (_0x304695) {
    return null;
  }
}
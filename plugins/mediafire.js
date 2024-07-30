let handler = async (_0x45f970, {
  conn: _0x5f1fd2,
  args: _0x286da9,
  usedPrefix: _0x2ade9c,
  text: _0x222152,
  command: _0x443705
}) => {
  let _0x286fd4 = "©";
  if (!_0x222152) {
    return _0x45f970.reply("التحميل من منصة ميديافاير مثال :\n\n.mediafire https://www.mediafire.com/file/96mscj81p92na3r/images+(35).jpeg/file");
  }
  let _0x113b19 = _0x222152.match(/(?:https?:\/{2})?(?:w{3}\.)?mediafire(?:com)?\.(?:com|be)(?:\/www\?v=|\/)([^\s&]+)/);
  if (!_0x113b19) {
    return _0x45f970.reply("الرابط ااذي ادخلتم غير موجود");
  }
  let _0x46da29 = await mediafireDl("" + _0x113b19);
  if (_0x46da29[0].size.split("MB")[0] >= 9600) {
    return _0x45f970.reply("File الحد الاقصى هو  128MB\n\n" + JSON.stringify(_0x46da29, null, 2));
  }
  let _0x39d1a8 = "*MEDIAFIRE*\n\n";
  _0x39d1a8 += _0x286fd4 + " الاسم : " + _0x46da29[0].nama + "\n";
  _0x39d1a8 += _0x286fd4 + " الحجم : " + _0x46da29[0].size + "\n";
  _0x39d1a8 += _0x286fd4 + " نوع الملف : " + _0x46da29[0].mime + "\n\n";
  _0x39d1a8 += "جاري التحميل يا عزيزي ♥...";
  _0x45f970.reply(_0x39d1a8);
  const _0x36583d = {
    url: _0x46da29[0].link
  };
  const _0x1e8d25 = {
    document: _0x36583d,
    fileName: _0x46da29[0].nama,
    mimetype: _0x46da29[0].mime
  };
  _0x5f1fd2.sendMessage(_0x45f970.chat, _0x1e8d25, {
    quoted: _0x45f970
  });
};
handler.help = ["mediafire"];
handler.tags = ["downloader"];
handler.command = /^(mediafire)$/i;
export default handler;
import _0x186ee0 from "axios";
import _0x3d7251 from "cheerio";
let mediafireDl = async _0x5bec34 => {
  let _0x2236cd = await _0x186ee0.get(_0x5bec34);
  let _0x37c333 = await _0x3d7251.load(_0x2236cd.data);
  let _0x2d7980 = [];
  let _0x2d0a5a = _0x37c333("a#downloadButton").attr("href");
  let _0x2f8513 = _0x37c333("a#downloadButton").text().replace("Download", "").replace("(", "").replace(")", "").replace("\n", "").replace("\n", "").replace("", "");
  let _0x1f95f7 = _0x2d0a5a.split("/");
  let _0x1ad8f8 = _0x1f95f7[5];
  let _0x2575b0 = _0x1ad8f8.split(".");
  _0x2575b0 = _0x2575b0[1];
  const _0x3bd451 = {
    nama: _0x1ad8f8,
    mime: _0x2575b0,
    size: _0x2f8513,
    link: _0x2d0a5a
  };
  _0x2d7980.push(_0x3bd451);
  return _0x2d7980;
};
import _0x1f3070 from "form-data";
import _0xbe92e0 from "jimp";
async function processing(_0x562bdd, _0x40bd42) {
  return new Promise(async (_0x22856a, _0x59037c) => {
    let _0x3f959e = ["enhance", "recolor", "dehaze"];
    if (_0x3f959e.includes(_0x40bd42)) {
      _0x40bd42 = _0x40bd42;
    } else {
      _0x40bd42 = _0x3f959e[0];
    }
    let _0x2a48dd;
    let _0x40c906 = new _0x1f3070();
    let _0x1725ed = "https://inferenceengine.vyro.ai/" + _0x40bd42;
    _0x40c906.append("model_version", 1, {
      "Content-Transfer-Encoding": "binary",
      contentType: "multipart/form-data; charset=uttf-8"
    });
    _0x40c906.append("image", Buffer.from(_0x562bdd), {
      filename: "enhance_image_body.jpg",
      contentType: "image/jpeg"
    });
    _0x40c906.submit({
      url: _0x1725ed,
      host: ".ai",
      path: "/" + _0x40bd42,
      protocol: "https:",
      headers: {
        "User-Agent": "okhttp/4.9.3",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip"
      }
    }, function (_0x52026a, _0x18fc5d) {
      if (_0x52026a) {
        _0x59037c();
      }
      let _0xe57637 = [];
      _0x18fc5d.on("data", function (_0x26b0e3, _0x2511ff) {
        _0xe57637.push(_0x26b0e3);
      }).on("end", () => {
        _0x22856a(Buffer.concat(_0xe57637));
      });
      _0x18fc5d.on("error", _0x5b173f => {
        _0x59037c();
      });
    });
  });
}
let handler = async (_0x194484, {
  conn: _0x4853d6,
  from: _0x240bb5,
  usedPrefix: _0x1f65de,
  command: _0x5a8003
}) => {
  _0x4853d6.enhancer = _0x4853d6.enhancer ? _0x4853d6.enhancer : {};
  if (_0x194484.sender in _0x4853d6.enhancer) {
    throw "There is still a process that has not been completed, sis, please wait for it to finish!";
  }
  let _0x5042eb = _0x194484.quoted ? _0x194484.quoted : _0x194484;
  let _0x3335f7 = (_0x5042eb.msg || _0x5042eb).mimetype || _0x5042eb.mediaType || "";
  if (!_0x3335f7) {
    throw "اين هي الصورة التي تريد تحسينها؟\n\nارسلها ثم اشر اليها واكتب \n*.remini*";
  }
  if (!/image\/(jpe?g|png)/.test(_0x3335f7)) {
    throw "Mime " + _0x3335f7 + " not supported";
  } else {
    _0x4853d6.enhancer[_0x194484.sender] = true;
  }
  let _0x2dbce8 = await _0x5042eb.download?.();
  let _0x225dea;
  try {
    const _0x12d24b = await processing(_0x2dbce8, "enhance");
    _0x4853d6.sendFile(_0x194484.chat, _0x12d24b, "", "", _0x194484);
  } catch (_0x59ae72) {
    _0x225dea = true;
  } finally {
    if (_0x225dea) {
      _0x194484.reply("اوبس لم استطع تلبية طلبك :(");
    }
    delete _0x4853d6.enhancer[_0x194484.sender];
  }
};
handler.help = ["remini"];
handler.tags = ["image-edit"];
handler.command = ["remini"];
export default handler;
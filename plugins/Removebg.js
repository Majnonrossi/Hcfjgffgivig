import _0x3628b2 from "axios";
import _0x255d7e from "form-data";
let handler = async (_0x402212, {
  conn: _0x431ce2,
  text: _0x4f05b9,
  args: _0x106761,
  usedPrefix: _0x1a3b27,
  command: _0x3d893c
}) => {
  let _0x13469b = _0x402212.quoted ? _0x402212.quoted : _0x402212;
  let _0x451cfb = (_0x13469b.msg || _0x13469b).mimetype || "";
  if (!_0x451cfb) {
    throw "media not found";
  }
  let _0x1f3129 = await _0x13469b.download();
  let _0x5d9d5e = "https://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K";
  try {
    await _0x402212.reply(wait);
    let _0x209f97 = await removeBg(_0x1f3129);
    const _0x4834e8 = {
      image: _0x209f97,
      caption: _0x5d9d5e
    };
    await _0x431ce2.sendMessage(_0x402212.chat, _0x4834e8, {
      quoted: _0x402212
    });
  } catch (_0x4e4f9f) {
    throw "error contact https://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K fix the feature";
  }
};
handler.help = ["removebg"];
handler.tags = ["tools"];
handler.command = /^removebg$/i;
export default handler;
const apii = await _0x3628b2.create({
  baseURL: "https://api4g.iloveimg.com"
});
const getTaskId = async () => {
  const {
    data: _0x2adafa
  } = await _0x3628b2.get("https://www.iloveimg.com/id/hapus-latar-belakang");
  apii.defaults.headers.post.authorization = "Bearer " + _0x2adafa.match(/ey[a-zA-Z0-9?%-_/]+/g)[1];
  return _0x2adafa.match(/taskId = '(\w+)/)[1];
};
const uploadImageToServer = async _0x4bda0 => {
  const _0x55ba32 = await getTaskId();
  const _0x33088f = Math.random().toString(36).slice(2) + ".jpg";
  const _0x1f844d = new _0x255d7e();
  _0x1f844d.append("name", _0x33088f);
  _0x1f844d.append("chunk", "0");
  _0x1f844d.append("chunks", "1");
  _0x1f844d.append("task", _0x55ba32);
  _0x1f844d.append("preview", "1");
  _0x1f844d.append("pdfinfo", "0");
  _0x1f844d.append("pdfforms", "0");
  _0x1f844d.append("pdfresetforms", "0");
  _0x1f844d.append("v", "web.0");
  _0x1f844d.append("file", _0x4bda0, _0x33088f);
  const _0x309921 = await apii.post("/v1/upload", _0x1f844d, {
    headers: _0x1f844d.getHeaders()
  }).catch(_0x2e9e22 => _0x2e9e22.response);
  if (_0x309921.status !== 200) {
    throw _0x309921.data || _0x309921.statusText;
  }
  const _0x28d6b7 = {
    serverFilename: _0x309921.data.server_filename,
    taskId: _0x55ba32
  };
  return _0x28d6b7;
};
const removeBg = async (_0x2576e8, _0xc87710 = "arraybuffer") => {
  const {
    serverFilename: _0x4fac5b,
    taskId: _0x374b33
  } = await uploadImageToServer(_0x2576e8);
  const _0x2b9363 = new _0x255d7e();
  _0x2b9363.append("task", _0x374b33);
  _0x2b9363.append("server_filename", _0x4fac5b);
  const _0x1bc79e = await apii.post("/v1/removebackground", _0x2b9363, {
    headers: _0x2b9363.getHeaders(),
    responseType: _0xc87710
  }).catch(_0x1864d4 => _0x1864d4.response);
  const _0xf3e820 = _0x1bc79e.headers["content-type"];
  if (_0x1bc79e.status !== 200 || !/image/.test(_0xf3e820)) {
    throw JSON.parse(_0x1bc79e.data?.toString() || "{\"error\":{\"message\":\"An error occurred\"}}");
  }
  return _0x1bc79e.data;
};

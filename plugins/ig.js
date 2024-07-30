var {
  saveig,
  ig,
  instagramGetUrl,
  FastDl
} = await import("../lib/igdl.js");
var handler = async (_0x2dfe14, {
  command: _0x313ec0,
  usedPrefix: _0x16f047,
  conn: _0x53b884,
  text: _0x32bfc5,
  args: _0x434f6f
}) => {
  if (!_0x32bfc5) {
    throw "Input Url";
  }
  let _0x2eb134 = await saveig(_0x32bfc5);
  if (_0x2eb134.medias) {
    let _0x3592b1 = "";
    for (let _0xe0bd22 = 0; _0xe0bd22 < _0x2eb134.medias?.length; _0xe0bd22++) {
      let _0x153088 = _0x2eb134.medias[_0xe0bd22];
      let _0x508a81 = _0x153088.url;
      if (_0x508a81) {
        await _0x53b884.sendFile(_0x2dfe14.chat, _0x508a81, "", "" + _0x3592b1, _0x2dfe14);
      }
    }
  } else {
    console.log("Invalid data format in results");
  }
};
handler.help = ["instagram"];
handler.tags = ["downloader"];
handler.command = /^i(nsta(gram(dl)?|dl)|g(dl)?)$/i;
export default handler;
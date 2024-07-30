import _0x4379d7 from "axios";
import _0x522b54 from "cheerio";
let handler = async (_0x1edb24, {
  conn: _0x35b0c2,
  args: _0x21e713,
  usedPrefix: _0x37ff61,
  text: _0x196fe6,
  command: _0xf086b7
}) => {
  if (!_0x196fe6) {
    throw "هذا الامر خاص بتحميل صور ذاك جودة عالية للمصممين هذه الاخيرة عبارة عن vector وهي مأخوذة من موقع \nhttps://storyset.com\n\n يمكنك تحميلها عبارة كتابة على سبيل المثال :\n\n\n*.storyset* men";
  }
  try {
    await _0x1edb24.reply("> انتظر ....");
    let _0x16ed48 = await fetchThumbnailUrls("https://storyset.com/search?q=" + encodeURIComponent(_0x196fe6));
    let _0x3d870d = _0x16ed48[Math.floor(Math.random() * _0x16ed48.length)];
    const _0x4007d0 = {
      url: _0x3d870d
    };
    const _0x593388 = {
      image: _0x4007d0,
      caption: "[ RESULT ]"
    };
    await _0x35b0c2.sendMessage(_0x1edb24.chat, _0x593388, {
      quoted: _0x1edb24
    });
  } catch (_0x4bd55d) {
    throw "error";
  }
};
handler.help = ["storyset"];
handler.tags = ["downloader"];
handler.command = /^(storyset)$/i;
export default handler;
async function fetchThumbnailUrls(_0x167714) {
  try {
    const _0x2c907f = await _0x4379d7.get(_0x167714);
    const _0x364e7e = _0x522b54.load(_0x2c907f.data);
    const _0x2c56a3 = _0x364e7e("script[type=\"application/ld+json\"]").toArray().map(_0x144383 => {
      try {
        const _0x375dc9 = JSON.parse(_0x364e7e(_0x144383).html());
        if (_0x375dc9["@type"] === "ImageObject" && _0x375dc9.thumbnailUrl) {
          return _0x375dc9.thumbnailUrl;
        }
      } catch (_0x13debe) {}
    }).filter(_0x3e150b => _0x3e150b);
    return _0x2c56a3;
  } catch (_0x185aa2) {
    console.error("Gagal mengambil halaman web:", _0x185aa2);
    return [];
  }
}
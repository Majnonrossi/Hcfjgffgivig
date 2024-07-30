import _0x361d77 from "cheerio";
import _0x222fac from "node-fetch";
const handler = async (_0x17ad5e, {
  conn: _0x45f983,
  text: _0x34dc27
}) => {
  _0x45f983.armag = _0x45f983.armag ? _0x45f983.armag : {};
  if (!_0x34dc27) {
    throw "*أدخل اسم الكتاب أو الرواية التي تريد البحث عنها مثال :*\n*.kitab مملكة الفراشة*";
  }
  delete _0x45f983.armag[_0x17ad5e.chat];
  let _0x5c8bff = await searchAlarabimag(_0x34dc27);
  const _0xc44dca = "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁📢 *رد على الرسالة برقم الرواية لتحميلها*\n▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁\nاالميزة من طرف Midsoune 👏 \n";
  const _0xb38908 = "¹ ² ³ ⁴ ⁵ ⁶ ⁷ ⁸ ⁹ ¹⁰ ¹¹ ¹² ¹³ ¹⁴ ¹⁵ ¹⁶ ¹⁷ ¹⁸ ¹⁹ ²⁰";
  const _0xee9d83 = _0xb38908.split(" ");
  let _0x3da746 = _0x5c8bff.slice(0, 20).map((_0x476836, _0x5d4f21) => {
    return _0xee9d83[_0x5d4f21] + " 📓 *" + _0x476836.title + "*";
  }).join("\n");
  const {
    key: _0x191973
  } = await _0x45f983.reply(_0x17ad5e.chat, _0x3da746 + "\n\n" + _0xc44dca);
  _0x45f983.armag[_0x17ad5e.chat] = {
    list: _0x5c8bff,
    key: _0x191973,
    timeout: setTimeout(() => {
      delete _0x45f983.armag[_0x17ad5e.chat];
    }, 250000)
  };
};
handler.before = async (_0x26411e, {
  conn: _0x3aca0b
}) => {
  _0x3aca0b.armag = _0x3aca0b.armag ? _0x3aca0b.armag : {};
  if (_0x26411e.isBaileys || !(_0x26411e.chat in _0x3aca0b.armag)) {
    return;
  }
  const _0x1b418c = _0x26411e.text.trim();
  if (!/^\d+$/.test(_0x1b418c)) {
    return;
  }
  const {
    list: _0x26ea9a,
    key: _0x570f20
  } = _0x3aca0b.armag[_0x26411e.chat];
  const _0x384862 = parseInt(_0x1b418c);
  const _0x156f5a = _0x384862 - 1;
  if (_0x156f5a >= 0 && _0x156f5a < _0x26ea9a.length) {
    const _0x3ffafc = _0x26ea9a[_0x156f5a].url;
    let _0x3d7a1e = await downloadAlarabimag(_0x3ffafc);
    let _0x5e7a22 = "‏📖 *" + _0x3d7a1e.titles[0] + "* 📖\n\n";
    _0x5e7a22 += _0x3d7a1e.infos.map(_0x105f05 => "‏*" + _0x105f05.title + ":* " + _0x105f05.value).join("\n");
    await _0x3aca0b.sendFile(_0x26411e.chat, _0x3d7a1e.links[0], _0x3d7a1e.titles[0] + ".pdf", _0x5e7a22, _0x26411e);
    clearTimeout(_0x3aca0b.armag[_0x26411e.chat].timeout);
    _0x3aca0b.armag[_0x26411e.chat].timeout = setTimeout(() => {
      delete _0x3aca0b.armag[_0x26411e.chat];
    }, 180000);
  }
};
handler.help = ["kitab"];
handler.tags = ["downloader"];
handler.command = /^(armag|kitab)$/i;
export default handler;
async function searchAlarabimag(_0x48b7bf) {
  const _0x1ccdb4 = "https://www.alarabimag.com/search/?q=" + encodeURIComponent(_0x48b7bf);
  const _0x2cbf67 = await _0x222fac(_0x1ccdb4);
  const _0x30c4d5 = await _0x2cbf67.text();
  const _0x2c71ea = _0x361d77.load(_0x30c4d5);
  return _0x2c71ea(".hotbooks").map((_0x3a438c, _0x389bd9) => ({
    title: _0x2c71ea(_0x389bd9).find("h2 a").text().trim(),
    url: "https://www.alarabimag.com" + _0x2c71ea(_0x389bd9).find("h2 a").attr("href"),
    description: _0x2c71ea(_0x389bd9).find(".info").text().trim(),
    imageSrc: "https://www.alarabimag.com" + _0x2c71ea(_0x389bd9).find(".smallimg").attr("src")
  })).get();
}
async function downloadAlarabimag(_0x5bf3c5) {
  const _0x3e8cd3 = await _0x222fac(_0x5bf3c5);
  const _0x59e4ca = await _0x3e8cd3.text();
  const _0x1c6179 = _0x361d77.load(_0x59e4ca);
  const _0x40429c = _0x1c6179("#download a").attr("href");
  const _0x1029b2 = await _0x222fac("https://www.alarabimag.com" + _0x40429c);
  const _0x958d03 = await _0x1029b2.text();
  const _0xec6131 = _0x361d77.load(_0x958d03);
  const _0x3a17ae = _0xec6131("#download a").map((_0x14828c, _0x4045cb) => "https://www.alarabimag.com" + _0xec6131(_0x4045cb).attr("href")).get();
  const _0x2da621 = _0xec6131("#download a").map((_0x3036d3, _0x24c83b) => _0xec6131(_0x24c83b).attr("title")).get();
  const _0x3b7b4e = _0xec6131(".rTable").find(".rTableRow").map((_0x5a9d9c, _0x36d850) => {
    const _0x13d753 = _0x1c6179(_0x36d850).find(".rTableHead").text().trim();
    const _0x2a5dcb = _0x1c6179(_0x36d850).find(".rTableCell").text().trim();
    const _0x336127 = {
      title: _0x13d753,
      value: _0x2a5dcb
    };
    return _0x336127;
  }).get();
  console.log(_0x3b7b4e);
  const _0x3db7c6 = {
    links: _0x3a17ae,
    titles: _0x2da621,
    infos: _0x3b7b4e
  };
  return _0x3db7c6;
}
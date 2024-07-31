import _0x531237 from "axios";
import _0x3fee92 from "cheerio";
import _0x4eb31f from "qs";
let handler = async (_0x2d92f2, {
  text: _0xbba3cb,
  command: _0x1ed523,
  conn: _0x5332c4
}) => {
  _0xbba3cb = _0xbba3cb.split("|");
  if (!_0xbba3cb[0]) {
    throw " example     .tts ar مرحبا انا جيين";
  }
  let _0x220d10 = _0xbba3cb[1] || "indonesian";
  let _0x2c38dd = _0xbba3cb[2] || 5;
  try {
    await _0x2d92f2.reply(wait);
    let _0x4bdac6 = await getModelIdVoice();
    let _0x1e0e6d = await getLanguage();
    if (_0xbba3cb[1] && !_0x1e0e6d[_0x220d10]) {
      let _0x17820a = "";
      let _0x4ccba8 = 1;
      for (let [_0x5f502d, _0x25cceb] of Object.entries(_0x1e0e6d)) {
        _0x17820a += _0x5f502d + ": \"" + _0x25cceb + "\"\n";
      }
      return _0x2d92f2.reply("خطا في اللغة : \n\n" + _0x17820a);
    }
    if (_0xbba3cb[2] && !_0x4bdac6[_0x2c38dd]) {
      let _0x41d0a8 = 1;
      return _0x2d92f2.reply("Model not available.List of models: \n\n" + _0x4bdac6.map(_0x51e8db => _0x41d0a8++ + ". " + _0x51e8db).join("\n") + "\n\nUse: number to choose");
    }
    let _0x4acba0 = _0x1e0e6d[_0x220d10];
    let _0x293afe = _0x4bdac6[_0x2c38dd];
    let _0x2cf314 = await getAudio(_0x4acba0, _0xbba3cb[0], _0x293afe);
    const _0x1377ac = {
      audio: _0x2cf314,
      mimetype: "audio/mpeg",
      ptt: true
    };
    await _0x5332c4.sendMessage(_0x2d92f2.chat, _0x1377ac, {
      quoted: _0x2d92f2
    });
  } catch (_0x3fdb11) {
    throw "error";
  }
};
handler.help = handler.command = ["wavel", "tts"];
handler.tags = ["tools"];
export default handler;
async function getAudio(_0x31a936, _0x3dfbbc, _0x29da22) {
  const _0x236881 = "https://wavel.ai/wp-json/myplugin/v1/tts";
  const _0x287e05 = {
    lang: _0x31a936,
    text: _0x3dfbbc,
    voiceId: _0x29da22
  };
  const _0x9764c5 = _0x287e05;
  const _0x38c197 = {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    Accept: "*/*",
    "X-Requested-With": "XMLHttpRequest"
  };
  try {
    const _0x1df091 = {
      headers: _0x38c197
    };
    let _0x10ac35 = await _0x531237.post(_0x236881, _0x4eb31f.stringify(_0x9764c5), _0x1df091);
    let {
      base64Audio: _0x16fac4
    } = _0x10ac35.data;
    let _0x4cf067 = Buffer.from(("data:audio/mpeg;base64," + _0x16fac4).split(",")[1], "base64");
    return _0x4cf067;
  } catch (_0x3a1726) {
    console.error("Error fetching audio:", _0x3a1726);
    throw _0x3a1726;
  }
}
async function getModelIdVoice() {
  try {
    let _0x4a10c5 = await _0x531237.get("https://wavel.ai/solutions/text-to-speech/anime-text-to-speech");
    let _0x39fd93 = _0x3fee92.load(_0x4a10c5.data);
    const _0x4398b2 = _0x39fd93("#dropdown option");
    let _0x8676fb = [];
    _0x4398b2.each((_0xc332dd, _0x526ac2) => {
      const _0x4860e1 = _0x39fd93(_0x526ac2).attr("value");
      _0x8676fb.push(_0x4860e1);
    });
    return _0x8676fb;
  } catch (_0x5ad95e) {
    console.error("Error fetching model IDs:", _0x5ad95e);
    throw _0x5ad95e;
  }
}
async function getLanguage() {
  try {
    let _0x344fb1 = await _0x531237.get("https://wavel.ai/solutions/text-to-speech/anime-text-to-speech");
    let _0x34575c = _0x3fee92.load(_0x344fb1.data);
    let _0x1c5944 = {};
    _0x34575c(".button-languagues").each((_0x1e88a6, _0x283f47) => {
      const _0x4fb9cf = _0x34575c(_0x283f47).data("lang");
      const _0xe36423 = _0x34575c(_0x283f47).attr("id");
      _0x1c5944[_0xe36423] = _0x4fb9cf;
    });
    return _0x1c5944;
  } catch (_0x467fee) {
    console.error("Error fetching Language:", _0x467fee);
    throw _0x467fee;
  }
                                                                              }

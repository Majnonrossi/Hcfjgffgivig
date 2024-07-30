import _0x1329d0 from "node-fetch";
import { sticker, addExif } from "../lib/sticker.js";
import { Sticker } from "wa-sticker-formatter";
let handler = async (_0x3455cb, {
  conn: _0x3b65a7,
  text: _0x45e439,
  args: _0x3ad75c,
  usedPrefix: _0x413ed4,
  command: _0x2ff0ed
}) => {
  if (!_0x45e439) {
    throw "*تحويل كلمة او نص لملصق*\n\n*—◉ مثال:*\n*◉ " + (_0x413ed4 + _0x2ff0ed) + " JEEN-Bot*";
  }
  let _0x9d03f0 = encodeURI(_0x45e439);
  if (_0x2ff0ed == "attp") {
    let _0x121804 = await (await _0x1329d0("https://api.erdwpe.com/api/maker/attp?text=" + _0x9d03f0)).buffer();
    let _0xf51b39 = await createSticker(_0x121804, false, global.packname, global.author);
    _0x3b65a7.sendFile(_0x3455cb.chat, _0xf51b39, "sticker.webp", "", _0x3455cb, {
      asSticker: true
    });
  }
  if (_0x2ff0ed == "attp2") {
    _0x3b65a7.sendFile(_0x3455cb.chat, "https://api.lolhuman.xyz/api/attp?apikey=" + lolkeysapi + "&text=" + _0x9d03f0, "sticker.webp", "", _0x3455cb, {
      asSticker: true
    });
  }
  if (_0x2ff0ed == "attp3") {
    _0x3b65a7.sendFile(_0x3455cb.chat, "https://api.lolhuman.xyz/api/attp2?apikey=" + lolkeysapi + "&text=" + _0x9d03f0, "sticker.webp", "", _0x3455cb, {
      asSticker: true
    });
  }
  if (_0x2ff0ed == "ttp5") {
    _0x3b65a7.sendFile(_0x3455cb.chat, "https://api.lolhuman.xyz/api/ttp6?apikey=" + lolkeysapi + "&text=" + _0x9d03f0, "sticker.webp", "", _0x3455cb, {
      asSticker: true
    });
  }
  if (_0x2ff0ed == "ttp4") {
    _0x3b65a7.sendFile(_0x3455cb.chat, "https://api.lolhuman.xyz/api/ttp5?apikey=" + lolkeysapi + "&text=" + _0x9d03f0, "sticker.webp", "", _0x3455cb, {
      asSticker: true
    });
  }
  if (_0x2ff0ed == "ttp3") {
    _0x3b65a7.sendFile(_0x3455cb.chat, "https://api.lolhuman.xyz/api/ttp3?apikey=" + lolkeysapi + "&text=" + _0x9d03f0, "sticker.webp", "", _0x3455cb, {
      asSticker: true
    });
  }
  if (_0x2ff0ed == "ttp2") {
    _0x3b65a7.sendFile(_0x3455cb.chat, "https://api.lolhuman.xyz/api/ttp2?apikey=" + lolkeysapi + "&text=" + _0x9d03f0, "sticker.webp", "", _0x3455cb, {
      asSticker: true
    });
  }
  if (_0x2ff0ed == "ttp") {
    _0x3b65a7.sendFile(_0x3455cb.chat, "https://api.lolhuman.xyz/api/ttp?apikey=" + lolkeysapi + "&text=" + _0x9d03f0, "sticker.webp", "", _0x3455cb, {
      asSticker: true
    });
  }
};
handler.command = handler.help = ["attp"];
handler.tags = ["sticker"];
export default handler;
async function createSticker(_0x404d61, _0x290332, _0x369cc1, _0x460958, _0x4e652c) {
  const _0x3809da = {
    type: "full",
    pack: _0x369cc1,
    author: _0x460958,
    quality: _0x4e652c
  };
  let _0x5a5735 = _0x3809da;
  return new Sticker(_0x404d61 ? _0x404d61 : _0x290332, _0x5a5735).toBuffer();
}
async function mp4ToWebp(_0xb5473f, _0x40e941) {
  if (_0x40e941) {
    if (!_0x40e941.pack) {
      _0x40e941.pack = "‎";
    }
    if (!_0x40e941.author) {
      _0x40e941.author = "‎";
    }
    if (!_0x40e941.crop) {
      _0x40e941.crop = false;
    }
  } else if (!_0x40e941) {
    _0x40e941 = {
      pack: "‎",
      author: "‎",
      crop: false
    };
  }
  let _0x10aaf8 = _0xb5473f.toString("base64");
  const _0x2fcb5a = {
    crop: _0x40e941?.crop,
    startTime: "00:00:00.0",
    endTime: "00:00:7.0",
    loop: 0
  };
  const _0x263894 = {
    ..._0x40e941
  };
  const _0x14e2fd = {
    file: "data:video/mp4;base64," + _0x10aaf8,
    processOptions: _0x2fcb5a,
    stickerMetadata: _0x263894,
    sessionInfo: {
      WA_VERSION: "2.2106.5",
      PAGE_UA: "WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
      WA_AUTOMATE_VERSION: "3.6.10 UPDATE AVAILABLE: 3.6.11",
      BROWSER_VERSION: "HeadlessChrome/88.0.4324.190",
      OS: "Windows Server 2016",
      START_TS: 1614310326309,
      NUM: "6247",
      LAUNCH_TIME_MS: 7934,
      PHONE_VERSION: "2.20.205.16"
    },
    config: {
      sessionId: "session",
      headless: true,
      qrTimeout: 20,
      authTimeout: 0,
      cacheEnabled: false,
      useChrome: true,
      killProcessOnBrowserClose: true,
      throwErrorOnTosBlock: false,
      chromiumArgs: ["--no-sandbox", "--disable-setuid-sandbox", "--aggressive-cache-discard", "--disable-cache", "--disable-application-cache", "--disable-offline-load-stale-cache", "--disk-cache-size=0"],
      executablePath: "C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe",
      skipBrokenMethodsCheck: true,
      stickerServerEndpoint: true
    }
  };
  const _0x36c477 = _0x14e2fd;
  let _0x532f40 = await _0x1329d0("https://sticker-api.openwa.dev/convertMp4BufferToWebpDataUrl", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, /",
      "Content-Type": "application/json;charset=utf-8"
    },
    body: JSON.stringify(_0x36c477)
  });
  return Buffer.from((await _0x532f40.text()).split(";base64,")[1], "base64");
}
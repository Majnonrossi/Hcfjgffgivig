import _0x94b521 from "node-fetch";
import _0x40ddf2 from "cheerio";
import _0x13c39e from "moment";
const leagueEmojis = [{
  league: "الدوري الفرنسي",
  emoji: "🇫🇷"
}, {
  league: "الدوري الإنجليزي الممتاز",
  emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
}, {
  league: "كأس رابطة الدوري الإنجليزي",
  emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
}, {
  league: "الدوري الإيطالي",
  emoji: "🇮🇹"
}, {
  league: "كأس إيطاليا",
  emoji: "🇮🇹"
}, {
  league: "الدوري الإسباني",
  emoji: "🇪🇸"
}, {
  league: "كأس ملك إسبانيا",
  emoji: "🇪🇸"
}, {
  league: "الدوري الألماني",
  emoji: "🇩🇪"
}, {
  league: "الدوري الهولندي الممتاز",
  emoji: "🇳🇱"
}, {
  league: "الدوري الهولندي",
  emoji: "🇳🇱"
}, {
  league: "الدوري البرتغالي الممتاز",
  emoji: "🇵🇹"
}, {
  league: "الدوري التركي الممتاز",
  emoji: "🇹🇷"
}, {
  league: "كأس تركيا",
  emoji: "🇹🇷"
}, {
  league: "دوري أبطال أوروبا",
  emoji: "🇪🇺"
}, {
  league: "الدوري الأوروبي",
  emoji: "🇪🇺"
}, {
  league: "دوري المؤتمر الأوروبي",
  emoji: "🇪🇺"
}, {
  league: "كأس العالم للناشئين تحت 17 سنة",
  emoji: "🏆"
}, {
  league: "تصفيات أمم أوروبا",
  emoji: "🇪🇺"
}, {
  league: "تصفيات كأس أمم افريقيا",
  emoji: "🌍"
}, {
  league: "تصفيات كأس العالم أمريكا الجنوبية",
  emoji: "🌎"
}, {
  league: "تصفيات كأس العالم أفريقيا",
  emoji: "🌍"
}, {
  league: "تصفيات كأس العالم آسيا",
  emoji: "🌏"
}, {
  league: "كأس آسيا",
  emoji: "🌏"
}, {
  league: "دوري المحترفين الإماراتي",
  emoji: "🇦🇪"
}, {
  league: "كأس المحترفين الإماراتي",
  emoji: "🇦🇪"
}, {
  league: "الدوري المغربي القسم الثاني  البطولة الإحترافية",
  emoji: "🇲🇦"
}, {
  league: "الدوري المغربي البطولة الإحترافية",
  emoji: "🇲🇦"
}, {
  league: "مباريات ودية",
  emoji: "🇺🇳"
}, {
  league: "كأس المانيا",
  emoji: "🇩🇪"
}, {
  league: "وديات منتخبات",
  emoji: "🇧🇱"
}, {
  league: "وديات منتخبات تحت 23",
  emoji: "🇧🇱"
}, {
  league: "وديات أندية",
  emoji: "🇧🇱"
}, {
  league: "وديات هايبرد",
  emoji: "🇧🇱"
}, {
  league: "الدوري البلجيكي",
  emoji: "🇧🇪"
}, {
  league: "الدوري السعودي للمحترفين",
  emoji: "🇸🇦"
}, {
  league: "تصفيات أمريكا الجنوبية لكأس العالم",
  emoji: "🌎"
}, {
  league: "كوبا ليبرتادوريس",
  emoji: "🌎"
}, {
  league: "تصفيات آسيا لكأس العالم",
  emoji: "🌍"
}, {
  league: "كأس الاتحاد الإنجليزي",
  emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
}, {
  league: "كأس الرابطة الإنجليزية للمحترفين",
  emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
}, {
  league: "كأس رابطة الدوري الإنجليزي EFL",
  emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
}, {
  league: "كأس الاتحاد الآسيوي",
  emoji: "🌍"
}, {
  league: "كأس أمم أفريقيا",
  emoji: "🌍"
}, {
  league: "كأس السوبر البرازيلي",
  emoji: "🇧🇷"
}, {
  league: "دوري السوبر الأفريقي",
  emoji: "🌍"
}, {
  league: "كأس السوبر الإسباني",
  emoji: "🇪🇸"
}, {
  league: "دوري أبطال آسيا",
  emoji: "🌍"
}, {
  league: "دوري أبطال أفريقيا",
  emoji: "🌍"
}, {
  league: "كأس الاتحاد الأفريقي",
  emoji: "🌍"
}, {
  league: "كأس الملك السعودي",
  emoji: "🇸🇦"
}];
const excludedLeagues = ["الدوري الليبيري الممتاز", "الدوري الصيني سوبر", "الدوري القطري نجوم قطر", "الدوري الروسي الممتاز", "الدوري الليبي الممتاز", "كأس الرابطة المصرية", "الدوري الياباني الممتاز", "الدوري المصري الممتاز", "الدوري الكويتي الممتاز", "الدوري العراقي نجوم", "الدوري الإنجليزي للسيدات سوبر", "الدوري الإسباني للسيدات", "الدوري الإماراتي", "الدوري الإسباني الدرجة الثانية", "الدوري الإنجليزي الدرجة الثانية", "الدوري الجزائري القسم الثاني", "الدوري الإيراني للمحترفين", "تشامبيونشيب البطولة الإنجليزية", "الدوري السعودي للسيدات الممتاز", "الدوري السعودي للناشئين تحت 17 سنة", "الدوري التونسي الرابطة المحترفة الأولى", "الدوري النرويجي الممتاز", "الدوري البحريني الممتاز", "الدوري الماليزي السوبر", "الدوري الأرجنتيني الممتاز", "الدوري النمساوي الممتاز", "الدوري البولندي الممتاز", "الدوري التشيكي الممتاز", "الدوري الأوكراني الممتاز", "الدوري البرتغالي الدرجة الثانية", "الدوري الصربي الممتاز", "كأس QSL القطرية Ooredoo", "كأس رئيس الدولة الإماراتي", "الدوري المجري الممتاز", "الدوري التونسي الدرجة الثاني الرابطة المحترفة الثانية", "الدوري الكرواتي الممتاز", "الدوري الألماني الدرجة الثانية", "الدوري الفرنسي الدرجة الثانية", "الدوري الإيطالي الدرجة الثاني الدرجة B", "الدوري السعودي للشباب تحت 19 سنة", "الدوري الأسترالي الدرجة A", "الدوري المكسيكي الممتاز", "الدوري السويدي الممتاز", "الدوري الهولندي", "الدوري اليوناني السوبر", "الدوري الدنماركي السوبر", "الدوري السويسري الممتاز", "الدوري الإسكتلندي للمحترفين", "الدوري المصري الدرجة الثانية (أ)", "الدوري الاسباني - الدرجة الثانية", "الدوري الجزائري الدرجة الثانية", "دوري المحترفين الإماراتي", "الدوري اللبناني الممتاز", "مباريات ودية -  أندية", "البحرين - كاس الملك", "كأس الاتحاد الآسيوي للأندية", "بطولة الألعاب الآسيوية - كرة القدم", "الدوري البرازيلي", "دوري الدرجة 2 السعودي", "دوري محمد بن سلمان د. أولى", "دوري الشباب السعودي", "دوري السعودي يلو", "دوري جنوب أفريقيا", "دوري أبطال أوروبا للشباب", "ليسوتو - دوري ليسوتو الممتاز", "دوري الدرجة الأولى الكويتي", "دوري الدرجة الثانية التونسي", "دوري الدرجة الثانية السعودي", "دوري الدرجة الثانية القطري", "الدوري البحريني", "الدوري اليمني", "الدوري الليبي", "الدوري السوري الممتاز", "دوري نجوم قطر", "الدوري الجزائري", "كأس خادم الحرمين الشريفين", "الدوري الإماراتي للمحترفين", "الدوري المصري", "الدوري العماني", "الدوري الكويتي", "كأس تركيا", "كأس الأردن", "وديات أندية (3)", "كأس مصر", "كأس اليونان", "كأس السلطان العماني", "الدوري التونسي", "كأس رابطة الدوري الارجنتيني", "كأس ولي العهد الكويتي", "الدوري الأردني للمحترفين"];
const getLiveMatches = async _0x462acc => {
  let _0x410801;
  let _0x38ac2b;
  if (_0x462acc === "kora") {
    _0x410801 = "https://jdwel.com/today/";
    _0x38ac2b = "*مباريات اليوم* :\n‏▬▬▬▬▬▬";
  } else if (_0x462acc === "korat") {
    _0x410801 = "https://jdwel.com/tomorrow/";
    _0x38ac2b = "*مباريات الغد* :\n‏▬▬▬▬▬▬";
  } else if (_0x462acc === "koray") {
    _0x410801 = "https://jdwel.com/yesterday/";
    _0x38ac2b = "*مباريات الأمس* :\n‏▬▬▬▬▬▬";
  } else if (_0x462acc === "koran") {
    _0x410801 = "https://jdwel.com/today/";
    _0x38ac2b = "*مباريات الأن* :\n‏▬▬▬▬▬\n";
  } else {
    return;
  }
  const _0xef0865 = _0x410801;
  try {
    const _0x43cfe6 = await _0x94b521(_0xef0865);
    const _0x5cd98a = await _0x43cfe6.text();
    const _0x4235c2 = _0x40ddf2.load(_0x5cd98a);
    const _0x4b8773 = [];
    let _0x41a306 = "";
    _0x4b8773.push("" + _0x38ac2b);
    _0x4235c2("ul.comp_matches_list.matches_list").each((_0x219267, _0x3bac0a) => {
      const _0x4dabce = _0x4235c2(_0x3bac0a).find(".comp_separator.container .main h4").text().trim().replace(/ الدرجة الاولى/g, "").replace(/ الدرجة الأولى/g, "").replace(/ خادم الحرمين الشريفين/g, "");
      const _0x33e7cf = _0x4235c2(_0x3bac0a).find(".single_match");
      if (excludedLeagues.includes(_0x4dabce)) {
        return;
      }
      if (_0x4dabce !== _0x41a306) {
        _0x41a306 = _0x4dabce;
        const _0x160ff5 = _0x5b4e80 => {
          const _0x168578 = leagueEmojis.find(_0x534709 => _0x534709.league === _0x5b4e80);
          if (_0x168578) {
            return _0x168578.emoji;
          } else {
            return "‏";
          }
        };
        const _0x3cce11 = _0x160ff5(_0x41a306);
        if (_0x462acc != "koran") {
          _0x4b8773.push("\n*" + _0x3cce11 + " " + _0x41a306 + "‎*\n‏══════ ⋆★⋆ ══════");
        }
      }
      _0x33e7cf.each((_0x3a99a2, _0x2f819e) => {
        const _0x2e2374 = _0x4235c2(_0x2f819e).find(".team.hometeam span.the_team").text().trim();
        const _0x10dfdc = _0x4235c2(_0x2f819e).find(".team.awayteam span.the_team").text().trim();
        const _0x378598 = _0x4235c2(_0x2f819e).find(".middle_column.cell.col-2 .match_time .the_otime").text();
        const _0x162fa1 = _0x13c39e(_0x378598).subtract(2, "hours").format("HH:mm");
        const _0x3ea1e7 = _0x4235c2(_0x2f819e).find(".match_status");
        const _0x49b0c3 = _0x3ea1e7.find("span").text().trim().replace(/بين الشوطين/g, "½").replace(/انتهت/g, "✅").replace(/'/g, "\"").replace(/تبدأ قريباً/g, "⏳").replace(/ألغيت/g, "❌");
        const _0x4b2429 = "\"" + _0x49b0c3.split("\"")[0];
        const _0x312179 = _0x4b2429.replace(/"½/g, "½").replace(/"✅/g, "✅").replace(/""/g, "\"").replace(/"⏳/g, "⏳").replace(/"❌/g, "❌");
        const _0x2350a7 = _0x4235c2(_0x2f819e).find(".match_score");
        const _0x1f80e1 = _0x2350a7.find(".hometeam").text();
        const _0x5a5aad = _0x2350a7.find(".awayteam").text();
        let _0x58afdf = _0x1f80e1 + " - " + _0x5a5aad;
        let _0x4bd033 = "";
        if (_0x462acc === "koran") {
          if (_0x49b0c3.includes("\"")) {
            _0x4bd033 += "‏【 *" + _0x2e2374 + "* *" + _0x58afdf + "* *" + _0x10dfdc + "* 】" + _0x312179 + "\n";
          } else {
            return;
          }
        } else if (_0x462acc !== "koran" && _0x3ea1e7.text().includes("بدأت")) {
          _0x4bd033 += "‏【 *" + _0x2e2374 + "* ✘ *" + _0x10dfdc + "* 】" + _0x162fa1 + "\n";
        } else {
          _0x4bd033 += "‏【 *" + _0x2e2374 + "* *" + _0x58afdf + "* *" + _0x10dfdc + "* 】" + _0x312179 + "\n";
        }
        _0x4b8773.push(_0x4bd033);
      });
    });
    return _0x4b8773;
  } catch (_0x1ccb41) {
    console.error("حدث خطأ أثناء الاتصال بالموقع:", _0x1ccb41);
    return null;
  }
};
const handler = async (_0x2e163b, {
  conn: _0x3e0028,
  command: _0x175df6
}) => {
  try {
    const _0x1b9cdb = await getLiveMatches(_0x175df6);
    if (_0x1b9cdb && _0x1b9cdb.length > 0) {
      const _0x8560a8 = _0x1b9cdb.join("\n");
      _0x3e0028.reply(_0x2e163b.chat, _0x8560a8, _0x2e163b);
    } else {
      _0x3e0028.reply(_0x2e163b.chat, "لا يمكن العثور على المباريات الملعوبة حالياً.");
    }
  } catch (_0x349abc) {
    console.error("حدث خطأ أثناء استخراج معلومات المباريات:", _0x349abc);
    _0x3e0028.reply(_0x2e163b.chat, "حدث خطأ أثناء استخراج معلومات المباريات.");
  }
};
handler.help = ["kora", "koray", "koran", "korat"];
handler.tags = ["tools"];
handler.command = /^(kora|koray|koran|korat)$/i;
export default handler;
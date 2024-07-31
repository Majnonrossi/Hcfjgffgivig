const I = function () {
  let v = true;
  return function (h, j) {
    const E = {
      GhfiL: function (L, W) {
        return L + W;
      },
      exUgW: "debu",
      NQpVG: "gger",
      SwYVx: "action",
      kCKQJ: function (L, W) {
        return L(W);
      },
      tkBpR: "return (function() ",
      fthkX: "{}.constructor(\"return this\")( )",
      RlASM: function (L, W) {
        return L === W;
      },
      fYfmc: "uQRFC",
      ozJHa: function (L, W) {
        return L !== W;
      },
      qMOGz: "hYlOr",
      CPEvF: "aSRKR"
    };
    const W = v ? function () {
      const y = {
        xPXCw: function (s, r) {
          return E.kCKQJ(s, r);
        },
        BxKRh: function (s, r) {
          return E.GhfiL(s, r);
        },
        NOMbf: function (s, r) {
          return E.GhfiL(s, r);
        },
        BDHnw: E.tkBpR,
        XuwYB: E.fthkX
      };
      if (E.RlASM(E.fYfmc, E.fYfmc)) {
        if (j) {
          if (E.ozJHa(E.qMOGz, E.CPEvF)) {
            const s = j.apply(h, arguments);
            j = null;
            return s;
          } else {
            (function () {
              return true;
            }).constructor(E.GhfiL(E.exUgW, E.NQpVG)).call(E.SwYVx);
          }
        }
      } else {
        let M;
        try {
          M = y.xPXCw(E, y.BxKRh(y.NOMbf(y.BDHnw, y.XuwYB), ");"))();
        } catch (K) {
          M = W;
        }
        return M;
      }
    } : function () {};
    v = false;
    return W;
  };
}();
const C = I(this, function () {
  return C.toString().search("(((.+)+)+)+$").toString().constructor(C).search("(((.+)+)+)+$");
});
C();
const e = function () {
  let v = true;
  return function (h, j) {
    const E = {
      UBKmj: function (L, W) {
        return L(W);
      },
      sOqUz: function (L, W) {
        return L + W;
      },
      rzdGS: "return (function() {}.constructor(\"return this\")( ));",
      KhZOL: "",
      DHdDk: function (L) {
        return L();
      },
      FkuNc: function (L, W) {
        return L === W;
      },
      NhtOu: "ECzOs",
      tbLsk: function (L, W) {
        return L !== W;
      },
      RwWSl: "nsBvQ",
      AjPYl: "lRgle"
    };
    const W = v ? function () {
      if (E.FkuNc(E.NhtOu, E.NhtOu)) {
        if (j) {
          if (E.tbLsk(E.RwWSl, E.AjPYl)) {
            const y = j.apply(h, arguments);
            j = null;
            return y;
          } else if (E) {
            const r = s.apply(r, arguments);
            Z = null;
            return r;
          }
        }
      } else {
        const Z = E.UBKmj(h, E.sOqUz(E.sOqUz(E.rzdGS, E.KhZOL), ");"));
        j = E.DHdDk(Z);
      }
    } : function () {};
    v = false;
    return W;
  };
}();
(function () {
  e(this, function () {
    const v = new RegExp("function *\\( *\\)");
    const h = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
    const j = x("init");
    if (!v.test(j + "chain") || !h.test(j + "input")) {
      j("0");
    } else {
      x();
    }
  })();
})();
import p from "cheerio";
import D from "node-fetch";
let handler = async (l, {
  conn: v,
  args: h,
  usedPrefix: j,
  text: E,
  command: L
}) => {
  const W = {
    aIFPs: function (y, s) {
      return y(s);
    },
    Yklpo: " ماهي عاصمة السويد   \nExample:\n .ai",
    iAVwa: function (s, r) {
      return s !== r;
    },
    OEoFP: "YEhby",
    QLVEH: function (s, r) {
      return s !== r;
    },
    unGSz: "bZSVz",
    EbMkT: "حدث خطا"
  };
  if (!E) {
    return l.reply(W.Yklpo);
  }
  await l.reply(wait);
  try {
    if (W.iAVwa(W.OEoFP, W.OEoFP)) {
      const s = W ? function () {
        if (s) {
          const A = J.apply(u, arguments);
          O = null;
          return A;
        }
      } : function () {};
      M = false;
      return s;
    } else {
      let s = await W.aIFPs(CleanDx, E);
      await l.reply(s);
    }
  } catch (r) {
    if (W.QLVEH(W.unGSz, W.unGSz)) {
      if (j) {
        return W;
      } else {
        bdkZtw.aIFPs(y, 0);
      }
    } else {
      await l.reply(W.EbMkT);
    }
  }
};
handler.help = ["cleandx"];
handler.tags = ["internet"];
handler.command = /^(ai)$/i;
export default handler;
async function CleanDx(v) {
  let j = [];
  let E = generateRandomString(21);
  let L = "https://vipcleandx.xyz/";
  console.log(formatTime());
  j.push({
    content: v,
    role: "user",
    nickname: "",
    time: formatTime(),
    isMe: true
  });
  j.push({
    content: "æ­£åœ¨æ€è€ƒä¸­...",
    role: "assistant",
    nickname: "AI",
    time: formatTime(),
    isMe: false
  });
  if (j.length > 10) {
    j = j.shift();
  }
  const W = {
    list: j,
    id: E,
    title: v,
    prompt: "",
    temperature: 0.5,
    models: "0",
    continuous: true
  };
  let y = await D(L + "v1/chat/gpt/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Forwarded-For": generateRandomIP(),
      Referer: L,
      accept: "application/json, text/plain, */*"
    },
    body: JSON.stringify(W)
  });
  const s = await y.text();
  return s;
}
function generateRandomString(l) {
  const h = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let j = "";
  for (let E = 0; E < l; E++) {
    const L = Math.floor(Math.random() * h.length);
    j += h.charAt(L);
  }
  return j;
}
function generateRandomIP() {
  const v = [];
  for (let h = 0; h < 4; h++) {
    const E = Math.floor(Math.random() * 256);
    v.push(E);
  }
  return v.join(".");
}
function formatTime() {
  const l = new Date();
  const v = l.getHours().toString().padStart(2, "0");
  const h = l.getMinutes().toString().padStart(2, "0");
  const j = l.getSeconds().toString().padStart(2, "0");
  return v + ":" + h + ":" + j;
}
(function () {
  let v;
  try {
    const j = Function("return (function() {}.constructor(\"return this\")( ));");
    v = j();
  } catch (E) {
    v = window;
  }
  v.setInterval(x, 4000);
})();
function x(l) {
  const v = {
    SvqEA: function (j, E) {
      return j * E;
    },
    YZhTa: function (j, E) {
      return j !== E;
    },
    PKhgl: "PmqSu",
    CObWc: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    upEAu: function (j, E) {
      return j < E;
    },
    BvrPy: function (j, E) {
      return j === E;
    },
    jAdxo: "bXEgN",
    imuFi: "while (true) {}",
    rMMoN: "counter",
    hGyfC: "iLKyb",
    NweGQ: function (j, E) {
      return j === E;
    },
    zbaIJ: "string",
    xUBFG: function (j, E) {
      return j !== E;
    },
    FlzlL: "MvqTC",
    YHoct: "jZzMH",
    nSrkr: "BBYDR",
    yCoiV: "nmzTu",
    ysiGj: function (j, E) {
      return j !== E;
    },
    zhmWl: function (j, E) {
      return j + E;
    },
    MxXHK: function (j, E) {
      return j / E;
    },
    XCLBP: "length",
    PNWnm: function (j, E) {
      return j % E;
    },
    rxsii: function (j, E) {
      return j === E;
    },
    aLTrN: "tLDlq",
    TvXrC: function (j, E) {
      return j + E;
    },
    IEuDR: "debu",
    yiTqG: "gger",
    jmgxt: "action",
    xWkNJ: function (j, E) {
      return j !== E;
    },
    eATyt: "ewfoV",
    CJURQ: "kPBTl",
    HvbSb: "stateObject",
    eHeRy: function (j, E) {
      return j(E);
    },
    ZlnWB: function (j, E) {
      return j(E);
    },
    SReoz: "DGlFd",
    PkgEv: "OQunT",
    mGkaZ: "QnLAn",
    LKfYc: "YsNnW",
    KUSjI: "zQBCo",
    RjlZf: function (j, E) {
      return j(E);
    }
  };
  function h(j) {
    const E = {
      GErjg: v.CObWc,
      GGySe: function (L, W) {
        return v.upEAu(L, W);
      },
      kfFUB: function (L, W) {
        return v.SvqEA(L, W);
      },
      dvPPl: function (L, W) {
        return v.BvrPy(L, W);
      },
      WxkIQ: v.jAdxo,
      rgUBZ: v.imuFi,
      msuhu: v.rMMoN
    };
    if (v.YZhTa(v.hGyfC, v.hGyfC)) {
      const W = L.floor(v.SvqEA(W.random(), y.length));
      s += r.charAt(W);
    } else {
      if (v.NweGQ(typeof j, v.zbaIJ)) {
        if (v.xUBFG(v.FlzlL, v.YHoct)) {
          return function (W) {}.constructor(v.imuFi).apply(v.rMMoN);
        } else {
          const s = j.floor(v.SvqEA(E.random(), 256));
          L.push(s);
        }
      } else if (v.YZhTa(v.nSrkr, v.yCoiV)) {
        if (v.ysiGj(v.zhmWl("", v.MxXHK(j, j))[v.XCLBP], 1) || v.BvrPy(v.PNWnm(j, 20), 0)) {
          if (v.rxsii(v.aLTrN, v.aLTrN)) {
            (function () {
              if (E.dvPPl(E.WxkIQ, E.WxkIQ)) {
                return true;
              } else {
                const r = E.GErjg;
                let Z = "";
                for (let H = 0; E.GGySe(H, W); H++) {
                  const J = r.floor(E.kfFUB(Z.random(), r.length));
                  Z += r.charAt(J);
                }
                return Z;
              }
            }).constructor(v.TvXrC(v.IEuDR, v.yiTqG)).call(v.jmgxt);
          } else {
            h = j;
          }
        } else if (v.xWkNJ(v.eATyt, v.CJURQ)) {
          (function () {
            if (v.YZhTa(v.PKhgl, v.PKhgl)) {
              const Z = new v();
              const M = Z.getHours().toString().padStart(2, "0");
              const K = Z.getMinutes().toString().padStart(2, "0");
              const c = Z.getSeconds().toString().padStart(2, "0");
              return M + ":" + K + ":" + c;
            } else {
              return false;
            }
          }).constructor(v.TvXrC(v.IEuDR, v.yiTqG)).apply(v.HvbSb);
        } else if (E) {
          const Z = s.apply(r, arguments);
          Z = null;
          return Z;
        }
      } else {
        return function (M) {}.constructor(E.rgUBZ).apply(E.msuhu);
      }
      v.eHeRy(h, ++j);
    }
  }
  try {
    if (v.NweGQ(v.SReoz, v.SReoz)) {
      if (l) {
        if (v.xUBFG(v.PkgEv, v.mGkaZ)) {
          return h;
        } else {
          const E = W ? function () {
            if (E) {
              const A = J.apply(u, arguments);
              O = null;
              return A;
            }
          } : function () {};
          M = false;
          return E;
        }
      } else if (v.rxsii(v.LKfYc, v.KUSjI)) {
        v.ZlnWB(v, "0");
      } else {
        v.RjlZf(h, 0);
      }
    } else {
      return v;
    }
  } catch (W) {}
}

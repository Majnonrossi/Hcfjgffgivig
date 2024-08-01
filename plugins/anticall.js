conn.ev.on("call", async _0x37ff27 => {
  for (let _0x1631af of _0x37ff27) {
    if (_0x1631af.status === "offer") {
      let _0x23c518 = await conn.sendMessage(_0x1631af.from, {
        text: "`سير تقود مزيانة هادي`\n\n https://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K"
      });
      conn.sendContact(_0x1631af.from, global.owner, _0x23c518);
      await conn.rejectCall(_0x1631af.id, _0x1631af.from);
      await conn.updateBlockStatus(_0x1631af.from, "block");
    }
  }
});

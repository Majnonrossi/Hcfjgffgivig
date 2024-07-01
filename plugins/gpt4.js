import fetch from 'node-fetch';

var handler = async (m, { text, usedPrefix, command }) => {
    // Check if text is provided
    if (!text) {
        return conn.reply(m.chat, `🎌 *Ingresé una petición*\n\nEx: hi jeen`, m, fake);
    }

    try {
        // Update presence to 'composing'
        conn.sendPresenceUpdate('composing', m.chat);

        // Fetch response from API
        var apii = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${text}`);
        var res = await apii.json();

        // Reply with the response data
        await m.reply(res.data);
    } catch (error) {
        console.error(error);
        return conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, fake);
    }
};

// Ensure the handler function is only defined once
handler = async (m, { text, usedPrefix, command }) => {
    // Check if text is provided
    if (!text) {
        return conn.reply(m.chat, `🎌 *Ingresé una petición*\n\nEx: hi jeen`, m, fake);
    }

    try {
        // Update presence to 'composing'
        conn.sendPresenceUpdate('composing', m.chat);

        // Fetch response from API
        var apii = await fetch(`https://delirius-api-oficial.vercel.app/api/chatgpt?q=${text}`);
        var res = await apii.json();

        // Reply with the response data
        await m.reply(res.data);
    } catch (error) {
        console.error(error);
        return conn.reply(m.chat, `*🚩 Ocurrió un fallo*`, m, fake);
    }
};

export default handler;

import { search, download } from 'happymod-scraper'; // استيراد الوظائف من مكتبة HappyMod Scraper

const handler = async (m, { conn, command, text }) => {
    if (!text) throw `*Ex: ${command} minecraft*`;
    try {
        const results = await search(text); // البحث عن التطبيق في HappyMod
        if (!results.length) throw 'No results found';

        const data = await download(results[0].id); // تنزيل تفاصيل التطبيق من HappyMod

        const response = `
📲 *App Name:* ${data.name}
👨‍💻 *Developer:* ${data.developer}
📦 *Package ID:* ${data.package}
🕒 *Last Update:* ${data.lastup}
💪 *Size:* ${data.size}
`;

        await conn.sendMessage(m.chat, { image: { url: data.icon }, caption: response }, { quoted: m });

        const downloadingMessage = 'تطبيق يتم تحميله، يرجى الانتظار...';
        await conn.sendMessage(m.chat, { text: downloadingMessage }, { quoted: m });

        if (data.size.includes('GB') || parseInt(data.size.replace(' MB', '')) > 999) {
            return await conn.sendMessage(m.chat, { text: '*EL APK ES MUY PESADO.*' }, { quoted: m });
        }

        await conn.sendMessage(m.chat, { document: { url: data.dllink }, mimetype: 'application/vnd.android.package-archive', fileName: data.name + '.apk' }, { quoted: m });
    } catch (error) {
        console.error(error);
        throw 'An error occurred while processing the request.';
    }
};

handler.command = /^(test2)$/i;
handler.register = true;
handler.limit = 2;

export default handler;

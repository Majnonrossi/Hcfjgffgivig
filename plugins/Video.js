import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import fg from 'api-dylux';

const handler = async (m, {command, usedPrefix, conn, text}) => {
if (!text) throw `${mg}${mid.smsMalused4}\n*${usedPrefix + command} Billie Eilish - Bellyache*`
try {
if (command == 'audio') {
conn.reply(m.chat, lenguajeGB['smsAvisoEG']() + mid.smsAud, m, { contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '🩵 𝗦𝘂𝗽𝗲𝗿Jeen𝗕𝗼𝘁 Jeen-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
try {
const mediaa = await ytPlay(text);
const audiocore = mediaa.result2?.[0]?.audio || mediaa.result2?.[1]?.audio || mediaa.result2?.[2]?.audio || null;
const aa = await conn.sendMessage(m.chat, {audio: {url: audiocore}, fileName: `error.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
if (!aa) {
throw new Error();
}} catch {
try{const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
const json = await res.json();
const aa_1 = await conn.sendMessage(m.chat, {audio: {url: json.result.audio}, fileName: `error.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
if (!aa_1) aa_1 = await conn.sendFile(m.chat, json.result.audio, 'error.mp3', null, m, false, {mimetype: 'audio/mp4'});
}catch {
try{
let res = await yts(text)
res=res.videos[0]
let yt = await fg.yta(res.url,'128kbps')
await conn.sendMessage(m.chat, {audio: {url: yt.dl_url}, fileName: `error.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
}catch(e){ 
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0 //No gastada limite si fallas
}}}}
if (command == 'video') {
conn.reply(m.chat, lenguajeGB['smsAvisoEG']() + mid.smsVid, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '😻 𝗦𝘂𝗽𝗲𝗿 Jeen-𝗠𝗗 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}}) 
try {
const mediaa = await ytPlayVid(text);
const aa_2 = await conn.sendMessage(m.chat, {video: {url: mediaa.result}, fileName: `error.mp4`, caption: `${wm}`, thumbnail: mediaa.thumb, mimetype: 'video/mp4'}, {quoted: m});
if (!aa_2) {
throw new Error();
}} catch {
try
{
let res0 = await yts(text)
res0=res0.videos[0]
let yt0 = await fg.ytv(res0.url,'360p')
await conn.sendFile(m.chat, yt0.dl_url, 'error.mp4', `${wm}`, m);
}
catch{
const res = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`);
const json = await res.json();
await conn.sendFile(m.chat, json.result.video, 'error.mp4', `${wm}`, m);  
}
}}} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0 //No gastada limite si fallas
}}
handler.help = ['audio' , 'video'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['audio', 'video']
handler.limit = 3
export default handler

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
})}

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async (getUrl) => {
const result = [];
for (let i = 0; i < getUrl.formats.length; i++) {
const item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
const {contentLength} = item;
const bytes = await bytesToSize(contentLength);
result[i] = {audio: item.url, size: bytes};
}}
const resultFix = result.filter((x) => x.audio != undefined && x.size != undefined);
const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
const tinyUrl = tiny.data;
const title = getUrl.videoDetails.title;
const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({title, result: tinyUrl, result2: resultFix, thumb});
}).catch(reject);
})}

async function ytMp4(url) {
return new Promise(async (resolve, reject) => {
ytdl.getInfo(url).then(async (getUrl) => {
const result = [];
for (let i = 0; i < getUrl.formats.length; i++) {
const item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
const {qualityLabel, contentLength} = item;
const bytes = await bytesToSize(contentLength);
result[i] = {video: item.url, quality: qualityLabel, size: bytes};
}}
const resultFix = result.filter((x) => x.video != undefined && x.size != undefined && x.quality != undefined);
const tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
const tinyUrl = tiny.data;
const title = getUrl.videoDetails.title;
const thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({title, result: tinyUrl, rersult2: resultFix[0].video, thumb});
}).catch(reject);
})}

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async (getData) => {
const result = getData.videos.slice( 0, 5 );
const url = [];
for (let i = 0; i < result.length; i++) {
url.push(result[i].url);
}
const random = url[0];
const getAudio = await ytMp3(random);
resolve(getAudio);
}).catch(reject);
})}

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async (getData) => {
const result = getData.videos.slice( 0, 5 );
const url = [];
for (let i = 0; i < result.length; i++) {
url.push(result[i].url);
}
const random = url[0];
const getVideo = await ytMp4(random);
resolve(getVideo);
}).catch(reject);
})}

/*import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, {command, conn, text, usedPrefix }) => {
if (!text) throw `${mg}اكتب الامر والاسم\nمثال\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\nاكتب الاسم او العنوان\nمثال\n*${usedPrefix + command} Billie Eilish - Bellyache*`
try {
if (command == 'audio') {
conn.reply(m.chat, `${eg}يرجى الانتظارn\nانتظر لحظة`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'Jeen-𝙈𝘿 | Jeen',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K`}}}) 
  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text)
//https://leyscoders-api.herokuapp.com/api/playmp3?q=lebih%20baik%20darinya&apikey=Your_Key
  //("https://api.dhamzxploit.my.id/api/ytplaymp3?text="+text)
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp3', null, m, false, { mimetype: 'audio/mp4' })}
if (command == 'video) {
conn.reply(m.chat, `${eg}يرجى الانتظار\n\nيرحى الانتظار`, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'Jeen-𝙈𝘿 | Jeen-team',
body: 'Super Bot WhatsApp',         
previewType: 0, thumbnail: fs.readFileSync("./media/menus/Menu3.jpg"),
sourceUrl: `https://whatsapp.com/channel/0029VaiJnhbD38CbP5YcSK0K`}}})
  
let res = await fetch("https://violetics.pw/api/media/youtube-play?apikey=beta&query="+text) 
let json = await res.json()
conn.sendFile(m.chat, json.result.url, 'error.mp4', `${wm}`, m)}
}catch(e){
m.reply(`${fg}error\n𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉`)
console.log(e)
}}
handler.help = ['play.1' , 'play.2'].map(v => v + ' <texto>')
handler.tags = ['downloader']
handler.command = ['audio','video ']
export default handler*/

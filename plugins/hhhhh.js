//import db from '../lib/database.js'
import { promises } from 'fs'
import { join } from 'path'
import jimp from 'jimp'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'

let tags = {}

const defaultMenu = {
  before: 'Hi, %name 👋\n\n> Date: %date\n> Time: %time WIB\n> Runtime: %uptime\n%readmore',
  header: '*%category*',
  body: '• %cmd %islimit %isPremium',
  footer: '',
  after: '',
}

let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let name = m.pushName || conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'

    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'Asia/Jakarta'
    })

    let time = d.toLocaleTimeString(locale, { timeZone: 'Asia/Jakarta' })
    time = time.replace(/[.]/g, ':')

    let _uptime
    if (process.send) {
      process.send('uptime')
      _uptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }

    let uptime = clockString(_uptime)

    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })

    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag

    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || defaultMenu.after

    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag].toUpperCase()) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')

    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      me: conn.getName(conn.user.jid),
      name, date, time,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    // Generate user profile image
    const userProfile = await genProfile(conn, m)

    // Send the menu with user profile image
    const waImages = [
      'https://telegra.ph/file/de92ed4a729887ffc974c.jpg',
      'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg',
      'https://telegra.ph/file/de92ed4a729887ffc974c.jpg',
      'https://telegra.ph/file/00ce42a193b1dbbf907d4.jpg'
    ]

    const [firstRowImages, secondRowImages] = waImages.reduce((acc, curr, index) => {
      index < 2 ? acc[0].push(curr) : acc[1].push(curr)
      return acc
    }, [[], []])

    // Load and resize WhatsApp images
    const waImagesPromises = [
      ...firstRowImages.map(url => jimp.read(url)),
      ...secondRowImages.map(url => jimp.read(url))
    ]
    const waImagesInstances = await Promise.all(waImagesPromises)
    const resizedWaImages = waImagesInstances.map(image => image.resize(200, 200))

    // Generate the background image
    const bg = await jimp.read('https://a.uguu.se/cRSmrTkb.png')

    // Composite WhatsApp images onto the background image
    resizedWaImages.forEach((image, index) => {
      const x = index < 2 ? index * 200 : (index - 2) * 200
      const y = index < 2 ? 0 : 200
      bg.composite(image, x, y)
    })

    // Composite user profile image onto the background image
    bg.composite(userProfile, 10, 440)

    // Send the final composite image
    conn.sendFile(m.chat, await bg.getBufferAsync(jimp.MIME_PNG), 'menu.png', text.trim(), m)

    m.react('📚') 
    
  } catch (e) {
    conn.reply(m.chat, '❎ Lo sentimos, el menú tiene un error', m)
    throw e
  }
}

handler.command = ['hhhhh'] 
handler.group = false
handler.premium = true

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

async function genProfile(conn, m) {
  let font = await jimp.loadFont(jimp.FONT_SANS_32_WHITE),
    mask = await jimp.read('https://i.imgur.com/552kzaW.png'),
    avatar = await jimp.read(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')),
    status = (await conn.fetchStatus(m.sender).catch(console.log) || {}).status?.slice(0, 30) || 'Not Detected'

  await avatar.resize(150, 150) // Resize avatar
  await mask.resize(150, 150)
  await avatar.mask(mask)

  let userProfile = new jimp(300, 300)
  userProfile.composite(avatar, 10, 10)
  userProfile.print(font, 10, 170, 'Name: ' + m.pushName.slice(0, 20), 280) // Limit name to 20 characters
  userProfile.print(font, 10, 210, 'About: ' + status, 280) // Limit status to 280 characters
  userProfile.print(font, 10, 250, 'Number: ' + PhoneNumber('+' + m.sender.split('@')[0]).getNumber('international'), 280) // Limit number to 280 characters

  return userProfile.getBufferAsync(jimp.MIME_PNG)
}
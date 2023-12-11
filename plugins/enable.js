let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let isEnable = /true|enable|(turn)?on|1/i.test(command)
  let chat =global.DATABASE.data.chats[m.chat]
  let user = global.DATABASE.data.users[m.sender]
  let bot = global.DATABASE.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = isEnable
      break
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break
    case 'public':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
    case 'restrict':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    case 'nyimak':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['nyimak'] = isEnable
      break
    case 'autoread':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['autoread'] = isEnable
      break
    case 'pconly':
    case 'privateonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['pconly'] = isEnable
      break
    case 'gconly':
    case 'grouponly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['gconly'] = isEnable
      break
    case 'swonly':
    case 'statusonly':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['swonly'] = isEnable
      break
    default:
      if (!/[01]/.test(command)) return m.reply(`
『 𝗦𝗔𝗞𝗨𝗥𝗔-𝗠𝗗 𝗖𝗢𝗡𝗧𝗥𝗢𝗟 𝗖𝗢𝗠𝗠𝗔𝗡 』

▢ 𝗪𝗘𝗟𝗖𝗢𝗠𝗘 ❮ 𝗲𝗻𝗮𝗯𝗹 𝗼𝗿 𝗱𝗶𝘀𝗮𝗯𝗹𝗲 ❯
▢ 𝗗𝗘𝗟𝗘𝗧𝗘 ❮ 𝗲𝗻𝗮𝗯𝗹𝗲 𝗼𝗿 𝗱𝗶𝘀𝗮𝗯𝗹𝗲 ❯
▢ 𝗣𝗨𝗕𝗟𝗜𝗖 ❮ 𝗲𝗻𝗮𝗯𝗹𝗲 𝗼𝗿 𝗱𝗶𝘀𝗮𝗯𝗹𝗲 ❯
▢ 𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞 ❮ 𝗲𝗻𝗮𝗯𝗹𝗲 𝗼𝗿 𝗱𝗶𝘀𝗮𝗯𝗹𝗲 ❯
▢ 𝗔𝗡𝗧𝗜𝗗𝗘𝗟𝗘𝗧𝗘 ❮ 𝗲𝗻𝗮𝗯𝗹𝗲 𝗼𝗿 𝗱𝗶𝘀𝗮𝗯𝗹𝗲 ❯
▢ 𝗔𝗨𝗧𝗢𝗟𝗘𝗩𝗘𝗟𝗨𝗣 ❮ 𝗲𝗻𝗮𝗯𝗹𝗲 𝗼𝗿 𝗱𝗶𝘀𝗮𝗯𝗹𝗲 ❯
▢ 𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧 ❮ 𝗲𝗻𝗮𝗯𝗹𝗲 𝗼𝗿 𝗱𝗶𝘀𝗮𝗯𝗹𝗲 ❯
🔰 𝗲𝘅𝗮𝗺𝗽𝗹𝗲 : 
${usedPrefix}enable public
*©2023-2024 New version...*
`.trim())
      throw false
  }
  m.reply(`
*${type}* succeeded in *${isEnable ? 'on' : 'dead'}right* ${isAll ? 'for these bots' : isUser ? '' : 'for this chat'}
`.trim())
}
await conn.sendMessage(m.chat, { text: text.trim(), contextInfo: { externalAdReply: { title: conn.user.name, body: '', thumbnailUrl: ppb, sourceUrl: "https://chat.whatsapp.com/FYPYqeucaxr4qwME8G6Tot", mediaType: 1, renderLargerThumbnail: true }}})
  } catch (e) {
    m.reply(e)
  }
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']

handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler

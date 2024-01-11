import PhoneNumber from 'awesome-phonenumber'
import * as levelling from '../lib/levelling.js'
let handler = async (m, { conn }) => {
  let pp = thumb2
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  await conn.reply(m.chat, global.wait, m)
  try {
    pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {

  } finally {
    let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `✗_『 ＳＡＫＵＲＡ-ＭＡＩＮ_ＭＥＮＵ 』_✗
  ┏━━━━━━━━━━━━━━━✘
  ┃  *📜COMMAND-LIST*
  ┗━━━━━━━━━━━━━━━✘

╔═══『🤖 𝗔𝗜_𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 』═════❏
╠╦═══════════❑
║║ 🤖 .𝘼𝙄
║║ 🤖 .𝙊𝙋𝙀𝙉𝘼𝙄 
║║ 🤖 .𝙂𝙋𝙏 
╚╩══════❏
╔═『 👤 𝗢𝗪𝗡𝗘𝗥_𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 』═══❏
╠╦════════════❑
║║ 👤 .𝙐𝙋𝘿𝘼𝙏𝙀 
║║ 👤 .𝙊𝙒𝙉𝙀𝙍
║║ 👤 .𝙋𝙄𝙉𝘾𝙃𝘼𝙏
║║ 👤 .𝙎𝙀𝙏𝙋𝙋
║║ 👤 .𝙈𝙐𝙏𝙀
║║ 👤 .𝘽𝘾𝙂𝙍𝙊𝙐𝙋
║║ 👤 .𝙐𝙉𝙋𝙄𝙉𝘾𝙃𝘼𝙏
║║ 👤 .𝙇𝙄𝙎𝙏𝙂𝘾
╚╩═══════❏

╔『 📩 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥_𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 』═❏
╠╦═══════════❑
║║ 📩 .𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆
║║ 📩 .𝙂𝙊𝙊𝙂𝙇𝙀𝘿𝙍𝙄𝙑𝙀
║║ 📩 .𝙂𝙄𝙏𝘾𝙇𝙊𝙉𝙀
║║ 📩 .𝙄𝙂
║║ 📩 .𝙈𝙀𝘿𝙄𝘼𝙁𝙄𝙍𝙀  
║║ 📩 .𝙎𝙊𝙉𝙂 
║║ 📩 .𝙋𝙇𝘼𝙔
║║ 📩 .𝙏𝙄𝙆𝙏𝙊𝙆
║║ 📩 .𝙔𝙏𝘼
║║ 📩 .𝙔𝙏𝙑 
║║ 📩 .𝙔𝙏𝙎
║║ 📩 .𝙄𝙈𝘼𝙂𝙀
║║ 📩 .𝙉𝙋𝙈
╚╩════════❑
╔═════『 🎯 𝗕𝗢𝗧_𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 』═══❏
╠╦═══════════❑
║║ 🎯 .𝙂𝙍𝙊𝙐𝙋𝙈𝙀𝙉𝙐
║║ 🎯 .𝘼𝙇𝙇𝙈𝙀𝙉𝙐
║║ 🎯 .𝙋𝙄𝙉𝙂
║║ 🎯 .𝙍𝙐𝙉𝙏𝙄𝙈𝙀
║║ 🎯 .𝙊𝙒𝙉𝙀𝙍𝙈𝙀𝙉𝙐
║║ 🎯 .𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙈𝙀𝙉𝙐
║║ 🎯 .𝙏𝙊𝙊𝙇𝙈𝙀𝙉𝙐
║║ 🎯 .𝘼𝙄𝙈𝙀𝙉𝙐
║║ 🎯 .𝙂𝙍𝙊𝙐𝙋𝙈𝙀𝙉𝙐
║║ 🎯 .𝙍𝙐𝙉𝙏𝙄𝙈𝙀
║║ 🎯 .𝙈𝙐𝙏𝙀
╚╩════════❑
╔═══『 ⚒️ 𝗧𝗢𝗢𝗟_𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 』═════❑
╠╦═══════════❑
║║ ⚒️ .𝙂𝙊𝙊𝙂𝙇𝙀
║║ ⚒️ .𝙒𝙀𝘼𝙏𝙃𝙀𝙍
║║ ⚒️ .𝙏𝙊𝙐𝙍𝙇
║║ ⚒️ .𝙏𝙊𝙄𝙈𝙂
║║ ⚒️ .𝙏𝙊𝙈𝙋4
║║ ⚒️ .𝙋𝙍𝙊𝙁𝙄𝙇𝙀
║║ ⚒️ .𝘿𝙀𝙑𝙄𝘾𝙀
║║ ⚒️ .𝙁𝙀𝙏𝘾𝙃
║║ ⚒️ .𝙏𝙊𝙋𝙑𝙏
║║ ⚒️ .𝙌𝙍
║║ ⚒️ .𝙌𝙍𝘾𝙊𝘿𝙀
║║ ⚒️ .𝙍𝙀𝘼𝘿𝙈𝙊𝙍𝙀
║║ ⚒️ .𝙎𝙋𝙊𝙄𝙇𝙀𝙍
║║ ⚒️ .𝙍𝙀𝘼𝘿𝙑𝙄𝙀𝙒𝙊𝙉𝘾𝙀
║║ ⚒️ .𝙎𝙎𝙒𝙀𝘽
║║ ⚒️ .𝙎𝙎𝙋𝘾
║║ ⚒️ .𝙎𝙎𝙃𝙋
║║ ⚒️ .𝙎𝙎𝙏𝘼𝘽𝙇𝙀𝙏
║║ ⚒️ .𝙎𝙏𝙔𝙇𝙀
║║ ⚒️ .𝙒𝙃𝘼𝙏𝙈𝙐𝙎𝙄𝘾
║║ ⚒️ .𝙇𝙔𝙍𝙄𝘾𝙎
║║ ⚒️ .𝙋𝙄𝙉𝙏𝙀𝙍𝙀𝙎𝙏
║║ ⚒️ .𝙂𝙄𝙈𝘼𝙂𝙀
║║ ⚒️ .𝙌𝘾
║║ ⚒️ .𝙏𝙊𝙑𝙉
╚╩═════════❑

╔═════『 🪀 𝗚𝗥𝗢𝗨𝗣_𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 』═══❑
╠╦═══════════❑
║║ 🪀 .𝙃𝙄𝘿𝙀𝙏𝘼𝙂
║║ 🪀 .𝙇𝙄𝙉𝙆𝙂𝙍𝙊𝙐𝙋
║║ 🪀 .𝙆𝙄𝘾𝙆
║║ 🪀 .𝙎𝙀𝙏𝘿𝙀𝙎𝘾
║║ 🪀 .𝙂𝙍𝙊𝙐𝙋
║║ 🪀 .𝙎𝙀𝙏𝙉𝘼𝙈𝙀
║║ 🪀 .𝙎𝙀𝙏𝙋𝙋𝙂𝙍𝙊𝙐𝙋
║║ 🪀 .𝙏𝘼𝙂𝘼𝙇𝙇
║║ 🪀 .𝙈𝙐𝙏𝙀
║║ 🪀 .𝘿𝙀𝙇𝙀𝙏𝙀
║║ 🪀 .𝙀𝙈𝙊𝙅𝙄𝙈𝙄𝙓
╚╩═════════❑
╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼❖
╿ 🧚‍♂️𝙌𝙐𝙀𝙀𝙉-𝙎𝘼𝙆𝙐𝙍𝘼_𝙈𝘿_𝙑2
╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼❖`
    let pp = './src/sakura.jpg' 
    conn.sendFile(m.chat, pp, 'sakura.jpg', m2, m, null, rpl)
    m.react('🧚‍♂️')
}

handler.help = ['menu']
handler.tags = ['general']
handler.command = /^menu$/i

export default handler

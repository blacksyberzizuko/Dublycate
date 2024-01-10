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
    let str = `°•°___✘『 𝗚𝗥𝗢𝗨𝗣-𝗠𝗘𝗡𝗨 』✘___°•°
🤝 *USER* : ${username} ${registered ? '(' + name + ') ': ''})

╭━━━━━━━━━━━━━━━━━━━━━━⦁
┃🐍 *CYBER-DEMONS_TEAM* 🐍
┃ 𝐐𝐔𝐄𝐄𝐍-𝐒𝐀𝐊𝐔𝐑𝐀_𝐕2_𝐕𝐄𝐑𝐒𝐈𝐎𝐍
╰━━━━━━━━━━━━━━━━━━━━━━⦁
💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.add*
⚜️𝗗.𝗖.𝗧 ➠ *සමූහයට පුද්ගලයන් එකතුකරගැනීම සදහා...* 
🐍𝗨𝗦𝗘 ➠ .add *<number>*

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗  ➠ *.delete*
⚜️𝗗.𝗖.𝗧 ➠ *දැමූ මැසේජයක් මකාදැමීම සදහා...*
🐍𝗨𝗦𝗘 ➠ .delete *<tag massage>*

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.infogp*
⚜️𝗗.𝗖.𝗧 ➠ *සමූහයේ තොරතුරු ලබාගැනීම සදහා...*
🐍𝗨𝗦𝗘 ➠ .infogp

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.hidetag*
⚜️𝗗.𝗖.𝗧 ➠ *සමූහයේ පුද්ගලයන් hide method ලෙස ටැග් කිරීමට...*
🐍𝗨𝗦𝗘 ➠.hidetag *<massage>*

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ .invite
⚜️𝗗.𝗖.𝗧 ➠ *සමූහයට සම්බන්දවන ලෙස ආරාදනා කිරීමට...*
🐍𝗨𝗦𝗘 ➠.invite <94xxxx>

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.kick*
⚜️𝗗.𝗖.𝗧 ➠ *පුද්ගලයකු සමූහයෙන් නෙරපා හැරීම සදහා...*
🐍𝗨𝗦𝗘 ➠ .kick <tag user>

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.link*
⚜️𝗗.𝗖.𝗧 ➠ *සමූහ සබැදිය ලබාගැනීම සදහා...*
🐍𝗨𝗦𝗘 ➠ .link

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.group* 
⚜️𝗗.𝗖.𝗧 ➠ *සමූහය විවෘත්ත කිරීම සදහා...*
🐍𝗨𝗦𝗘 ➠ .group <open/close>

💭𝗖𝗢𝗠𝗠𝗔𝗡𝗗 ➠ *.tagall*
⚜️𝗗.𝗖.𝗧 ➠ *සමූහයේ පුද්ගලයන් සියල්ල ටැග් කිරීමට...*
🐍𝗨𝗦𝗘 ➠ .tagall *<massage>*
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
    m.react('🎭')
  }
}
handler.help = ['gpmenu']
handler.tags = ['general']
handler.command = /^groupmenu$/i

export default handler

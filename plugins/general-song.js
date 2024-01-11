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
    let str = `『 𝐘𝐎𝐔𝐓𝐔𝐁𝐄-𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 』
╭╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼❑    
╿HELLO ${username} ${registered ? '(' + name + ') ': ''})
╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼❑
🔱 *කරුණාකර ඔබට අවශ්‍ය ගොනුව බාගත කරගැනීමට සදහා පහත පියවර අනුගමනය කරන්න..*
🔱 *Hey user please follow the steps below to download the file you need..*

1️⃣ *Steps one ❲ පළමු පියවර ❳*
*🎧ලින්කුවක් නොමැතිව ගීත බාගත කිරීම සදහා.*
*🎧Download audio without youtube url.*

.play <enter the *song* name>
eg. .play I am rider

2️⃣ *Steps two ❲ දෙවන පියවර ❳*
*🎧ඔබගේ ගීතය Audio ආකාරයට ලබාගැනීමට හැකි අතර මේ සදහා ලින්කුවක් අවශ්‍ය වේ.*
*🎧You can get your song in audio form and a link is required for this.*

.yta <youtube url>
eg. .yta https://youtube.com/watch?v=jgRDLrrBjvU

3️⃣ *step three ❲ තෙවන පියවර ❳*
*🎧ඔබගේ ගීතය Document ආකාරයට ලබාගැනීමට හැකි අතර මේ සදහා ලින්කුවක් අවශ්‍ය වේ.*
*🎧You can get your song in Document form and link is required for this.*

.ytmp3 <youtube url>
eg. .ytmp3 https://youtube.com/watch?v=jgRDLrrBjvU

𝗧𝗛𝗜𝗦 𝗜𝗦 🧚‍♂️𝗤𝗨𝗘𝗘𝗡-𝗦𝗔𝗞𝗨𝗥𝗔_𝗠𝗗🧚‍♂️
𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗗 𝗕𝗬 𝗦𝗬𝗕𝗘𝗥-𝗗𝗘𝗠𝗢𝗡𝗦 𝗧𝗘𝗔𝗠
𝗧𝗛𝗔𝗡𝗞𝗦 𝗙𝗢𝗥 𝗨𝗦𝗘𝗜𝗡𝗚 𝗤𝗨𝗘𝗘𝗡-𝗦𝗔𝗞𝗨𝗥𝗔_𝗪𝗔𝗕𝗢𝗧
🤭𝗛𝗔𝗩𝗘 𝗔 𝗡𝗜𝗖𝗘 𝗗𝗔𝗬 
*🔱2024-2025 𝗩𝗘𝗥𝗦𝗜𝗢𝗡*
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
    m.react('〽️')
  }
}
handler.help = ['song']
handler.tags = ['general']
handler.command = /^song$/i

export default handler

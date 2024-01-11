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
    let str = `HELLO : ${username} ${registered ? '(' + name + ') ': ''})
I AM QUEEN SAKURA 
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
    m.react('🎭')
  }
}
handler.help = ['song']
handler.tags = ['general']
handler.command = /^song$/i

export default handler

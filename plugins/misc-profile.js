import PhoneNumber from 'awesome-phonenumber'
import * as levelling from '../lib/levelling.js'
let handler = async (m, { conn }) => {
  let pp = thumb2
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.profilePictureUrl(who, 'image')
  } catch (e) {

  } finally {
    let about = (await conn.fetchStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `『 𝗣𝗥𝗢𝗙𝗜𝗟𝗘-𝗜𝗡𝗙𝗢𝗥𝗠 』
❏ Name: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\nAbout: ' + about : ''}

❏ Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}

❏ Link: https://wa.me/${who.split`@`[0]}${registered ? '\n❏ Age: ' + age : ''}

❏ XP: TOTAL ${exp} (${exp - min} / ${xp}) [${max - exp} left to levelup]

❏ Level: ${level}

❏ Limit: ${limit}

❏ Registered: ${registered ? 'Yes (' + new Date(regTime) + ')': 'No'}${lastclaim > 0 ? '\n❏ Last Claim: ' + new Date(lastclaim) : ''}
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
    m.react('👤')
  }
}
handler.help = ['profile [@user]']
handler.tags = ['tools']
handler.command = /^profile$/i

export default handler

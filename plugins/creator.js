import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => thumbnailUrl.getRandom())
let name = await conn.getName(who)

  const sentMsg = await conn.sendContactArray(m.chat, [
    [nomorown, `${await conn.getName(nomorown + '@s.whatsapp.net')}`, ` BOT DEVELOPER `, `I AM STUDENT`, `NOT ABOUT`, `FROM TO SRI-LANKA`, `THE QUEEN-SAKURA_OWNER NUMBER  94770378874`, `DEVELOPED BY SYBER-DEMONS_TEAM`],
    [`${conn.user.jid.split('@')[0]}`, `${await conn.getName(conn.user.jid)}`, `THE MULTIDEVISE-WHATSAPP_BOT`, `YOU CAN USE THIS WHATSAPP BOT`, `SRI-LANKAN BEST WHATSAPP BOT`, `TO ANURADHAPURA`, ` https://github.com`, `ENJOY YOUR LIFE☺`]
  ], fkontak)
  await conn.reply(m.chat,`Hello @${m.sender.split(`@`)[0]} DONT USE IN SPAM `, sentMsg, {
                mentions: [m.sender]
                m.react('👨‍🚀')
            })
}

handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler

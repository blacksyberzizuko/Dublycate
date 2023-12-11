let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!m.quoted) throw 'Reply Message!'
    if (!m.quoted.fileSha256) throw 'Missing'
    let sticker = global.db.data.sticker
    let hash = m.quoted.fileSha256.toString('hex')
    if (!(hash in sticker)) throw 'not found in database'
    sticker[hash].locked = !/^un/i.test(command)
    m.reply('Done!')
    m.react('⚜')
} 
handler.help = ['un', ''].map(v => v + 'lockcmd')
handler.tags = ['database']
handler.command = /^(un)?lockcmd$/i
handler.premium = true

export default handler

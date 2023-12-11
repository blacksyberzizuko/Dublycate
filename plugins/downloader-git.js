import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i

let handler = async (m, {conn, text, args, usedPrefix, command }) => {
    if (!args[0]) throw `Example user ${usedPrefix}${command} github iteam name`
    let [usr, rep] = text.split`/`
    let url = `https://api.github.com/repos/${encodeURIComponent(usr)}/${encodeURIComponent(rep)}/zipball`
    let name = `${encodeURIComponent(rep)}.zip`
    m.reply(`*please waite uploadin your file*`)
    conn.sendFile(m.chat, url, name, null, m)
    m.react('📩')
}

handler.help = ['gitclone <username>/<repo>']
handler.tags = ['downloader']
handler.command = /gitclone/i

export default handler

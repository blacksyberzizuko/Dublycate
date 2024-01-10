import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw 'What are you looking for?'
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    m.react('🔍')
    switch (v.type) {
      case 'video': return `
╭╼╼❮ＹＯＵＴＵＢＥ-ＳＥＡＲＣＨ❯╼╼❑    
╿ *_${v.title}_*
╿ *🔗Link :* ${v.url}
╿ *🕒Duration :* ${v.timestamp}
╿ *📥Uploaded :* ${v.ago}
╿ *👁️‍🗨️Views :* ${v.views}
╰╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼❑`}}).filter(v => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}

handler.help = ['yts <query>']
handler.tags = ['downloader']
handler.command = /^yts(earch)?$/i

export default handler

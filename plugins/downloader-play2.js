

import yts from 'yt-search'

import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'

let limit = 320

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {

  

    if (!text) throw `✳️ Ingresa el título de una canción\n\n📌Ejemplo *${usedPrefix + command}* Lil Peep hate my life`

  let chat = global.db.data.chats[m.chat]

  let res = await yts(text)

  //let vid = res.all.find(video => video.seconds < 3600)

  let vid = res.videos[0]

  if (!vid) throw `✳️ Vídeo/Audio no encontrado`

  let isVideo = /vid$/.test(command)

  m.react('🎧') 

  

  try {

  let q = isVideo ? '360p' : '128kbps' 

  let v = vid.url

  let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))

  let dl_url = await (isVideo ? yt.video[q].download() : yt.audio[q].download())

  let title = await yt.title

  let size = await (isVideo ? yt.video[q].fileSizeH : yt.audio[q].fileSizeH)

  let play = `
┌──────────────

TITLE : ${anu.title}

QUALITY : ${data.quality}

FILE SIZE : ${data.fileSizeH}

WATCHED : ${args[0]}

└──────────────`

conn.sendFile(m.chat, vid.thumbnail, 'play', play, m, null, rpig)



if (size.split('MB')[0] >= limit) return m.reply(` ≡  *FG YTDL*\n\n▢ *⚖️Peso* : ${data.fileSizeH}\n▢ *🎞️Calidad* : ${data.quality}\n\n▢ _El archivo supera el límite de descarga_ *+ MB*`) 

if (size.includes('GB')) return m.reply(` ≡  *FG YTDL*\n\n▢ *⚖️Peso* : ${data.fileSizeH}\n▢ *🎞️Calidad* : ${data.quality}\n\n▢ _El archivo supera el límite de descarga_ *+${limit} MB*`)   

	  conn.sendFile(m.chat, dl_url, title + '.mp' + (3 + /vid$/.test(command)), `

  

▢ *TITLE* : ${anu.title}

▢ *QUALITY* : ${data.quality}

▢ *SIZE* : ${data.fileSizeH}

`.trim(), m, false, { mimetype: isVideo ? '' : 'audio/mpeg', asDocument: chat.useDocument })

		m.react(done) 

    } catch {

		m.reply(`*Error : pakda බලන්නේ දෙන්න බෑ කියුවනම් බෑතමා  වැරැද්දක් තියේ හදාගෙන වරෙන් ඊටපස්සේ දෙන්නම් Video එක 😈*`)

    }



}

handler.help = ['ytv <url>']
handler.tags = ['downloader']
handler.command = /^(yt(v(ideo)?|mp4))$/i

export default handler

const somematch = ( data, id ) => {
	let res = data.find(el => el === id )
	return res ? true : false};

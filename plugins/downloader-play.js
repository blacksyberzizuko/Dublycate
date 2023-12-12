import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
	if (!text) throw `🧚‍♂️PLEASE ENTER THE VIDEO/AUDIO NAME\n 🔍EXAMPLE *${usedPrefix + command}* I AM RIDER..`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `🧚‍♂️ *VIDEO NOT FOUND !!!*`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧')
	let play = `*_DOWNLOADING : ${title} | UPLOADED ON : ${ago} | TIME DURATION : ${timestamp} | VIEWS : ${views}_*`
 await conn.sendButton(m.chat, play, fgig, thumbnail, [
    ['🎶 MP3', `${usedPrefix}fgmp3 ${url}`],
    ['🎥 MP4', `${usedPrefix}fgmp4 ${url}`]
  ], m, rpl)
}

handler.help = ["play"].map(v => v + " <search>")
handler.tags = ['downloader']
handler.command = /^(play|song)$/i

handler.exp = 0
handler.limit = true

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

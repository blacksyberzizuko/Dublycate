import fetch from "node-fetch"

   let handler = async (m, { conn }) => {

   let link = await conn.groupInviteCode(m.chat)
   let linked = '*❏ GROUP JOIN LINK ❏*\nhttps://chat.whatsapp.com/' + link
   let s = await shortUrl(linked)
  
		m.reply(s)
	   m.react('🔗')
}

handler.help = ['linkgc', 'linkgroup']
handler.tags = ['group']
handler.command = /^link(gc|group)$/i

handler.group = true
handler.admin = true

export default handler

async function shortUrl(url) {
	let res = await fetch(`https://tinyurl.com/api-create.php?url=${url}`)
	return await res.text()
}

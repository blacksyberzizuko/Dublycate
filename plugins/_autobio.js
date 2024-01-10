let handler = m => m
handler.all = async function (m) {
let setting = global.db.data.settings[this.user.jid]
	
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 2000) }) * 1000}
let uptime = clockString(_uptime)
let bio = `🧚‍♂️ 𝗤𝗨𝗘𝗘𝗡-𝗦𝗔𝗞𝗨𝗥𝗔_𝗩2🔱\n🧑‍💻𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗗 𝗕𝗬: 𝗠⦁𝗥 𝗗𝗔𝗥𝗞-𝗛𝗬𝗣𝗘𝗥\n🧚‍♂️𝗧𝗛𝗘 𝗕𝗢𝗧 𝗥𝗨𝗡𝗧𝗜𝗠𝗘 𝗜𝗦 ${uptime} `
await this.updateProfileStatus(bio).catch(_ => _)
setting.status = new Date() * 1
} 
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' ⦁ ', h, ' ⦁ ', m, ' ⦁ ', s].map(v => v.toString().padStart(2, 0)).join('') 
} 

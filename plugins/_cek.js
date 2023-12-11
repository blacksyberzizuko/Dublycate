let handler = async ( m ) => {
  m.reply('*HELLO USER I AM QUEEN-SAKURA_MD*')
  m.react('👋')
}

handler.command = /^(cek|tes|alive|p|a)$/i

export default handler

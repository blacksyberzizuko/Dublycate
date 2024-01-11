let handler = async ( m ) => {
  m.reply('*👋 HELLO USER I AM ALIVE NOW*')
  m.react("👋")
}

handler.command = /^(cek|tes|alive|p|a)$/i

export default handler
export default handler

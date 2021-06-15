let handler = async (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
<<<<<<< Updated upstream
${conn.getName(m.sender)} esta ahora AFK${text ? ': ' + text : ''}
=======
${conn.getName(m.sender)} esta AFK${text ? ': ' + text : ''}
>>>>>>> Stashed changes
`)
}
handler.help = ['afk [razon]']
handler.tags = ['main']
handler.command = /^afk$/i

module.exports = handler

let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${m.text}
<<<<<<< Updated upstream
*Respuesta:* ${pickRandom(['Sí','Tal vez sí','Quizas','Probablemente no','No','Definitivamente no'])}
=======
*Respuesta:* ${pickRandom(['Sí','Tal vez sí','Quizás','Probablemente no','No','Imposible'])}
>>>>>>> Stashed changes
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
<<<<<<< Updated upstream
handler.help = ['es <texto>?']
handler.tags = ['concha']
=======
handler.help = ['es <pregunta>?']
handler.tags = ['conchas']
>>>>>>> Stashed changes
handler.customPrefix = /(\?$)/
handler.command = /^es$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}


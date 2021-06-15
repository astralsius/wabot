let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
<<<<<<< Updated upstream
*Pregunta:* ${command} ${text}
*Respuesta:* ${pickRandom(['Sí','Tal vez sí','Quizas','Probablemente no','No','Definitivamente no'])}
=======
*Pertanyaan:* ${command} ${text}
*Jawaban:* ${pickRandom(['Sí','Tal vez sí','Quizás','Probablemente no','No','Imposible'])}
>>>>>>> Stashed changes
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['es <pregunta>']
<<<<<<< Updated upstream
handler.tags = ['concha']
=======
handler.tags = ['conchas']
>>>>>>> Stashed changes
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


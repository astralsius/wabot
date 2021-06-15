let handler = m => m
handler.before = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (user.afk > -1) {
    m.reply(`
<<<<<<< Updated upstream
Se detuvo el AFK${user.afkReason ? ' despues de ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}
=======
Dejaste AFK${user.afkReason ? ' despues ' + user.afkReason : ''}
Durante ${clockString(new Date - user.afk)}
>>>>>>> Stashed changes
`.trim())
    user.afk = -1
    user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
    let user = global.DATABASE.data.users[jid]
    if (!user) continue
    let afkTime = user.afk
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    m.reply(`
No lo etiquetes!
<<<<<<< Updated upstream
Esta AFK ${reason ? 'razon ' + reason : 'sin razon'}
=======
Esta en afk ${reason ? 'Con razon ' + reason : 'sin razon'}
>>>>>>> Stashed changes
Durante ${clockString(new Date - afkTime)}
`.trim())
  }
  return true
}

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

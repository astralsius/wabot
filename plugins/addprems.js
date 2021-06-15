let handler = async (m, { conn }) => {
  
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (global.prems.includes(who.split`@`[0])) throw 'Ya eres premium!'
    global.prems.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `Hola, @${who.split`@`[0]}. Ya eres premium!`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })
  
}
handler.help = ['addprem *@user*']
handler.tags = ['owner']
handler.command = /^(add|agregar|\+)prem$/i
handler.rowner = true
module.exports = handler

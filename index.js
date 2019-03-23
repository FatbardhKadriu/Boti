const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.author.bot) {
    // mos i reago botave
    return
  }

  msg.reply('Ju keni thene: ' + msg.content)
})

client.login('NTU5MDcyMTUwMjUwODQ4Mjcw.D3gESw.43J9JfZysk2aRcKpf3P0W8-Fuhk')

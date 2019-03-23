const Discord = require('discord.js')
const math = require('mathjs')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${ client.user.tag }!`)
})

client.on('message', msg => {
  if (msg.author.bot) {
    // mos i reago botave
    return
  }

  const trigger = 'llogarit'
  if (msg.content.startsWith(trigger)) {
    const expr = msg.content.substr(trigger.length)
    const result = math.eval(expr)
    msg.reply(result)
  }
})

client.login(process.env.BOT_TOKEN)
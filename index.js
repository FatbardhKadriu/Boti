const Discord = require('discord.js')
const math = require('mathjs')
const client = new Discord.Client()

require('dotenv').config()

client.on('ready', () => {
  console.log(`Logged in as ${ client.user.tag }!`)
})

client.on('message', msg => {
  if (msg.author.bot) {
    // don't react to bots
    return
  }

  const trigger = 'calc'
  if (msg.content.startsWith(trigger)) {
    const expr = msg.content.split(" ");
    const result = eval(expr[1])
    msg.reply("Result is: " +result);
  }
})

client.login(process.env.DISCORD_TOKEN)
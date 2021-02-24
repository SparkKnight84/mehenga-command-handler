const Discord = require("discord.js")
module.exports = {
  commands: ['ping'],
  callback: (message, args, client) => {
    
    message.channel.send("Pong!")
    
  }
}
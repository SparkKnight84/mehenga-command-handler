const config = require(`../../config.js`)
const admin_ids = config.admin_ids
const Discord = require("discord.js")
module.exports = {
  commands: ['eval'],
  callback: (message, args, client) => {
    
    if(admin_ids.includes(message.author.id)){
      
      var result = message.content.split(" ").slice(1).join(" ")
      let evaled = eval(result);
    
      message.channel.send(evaled).catch(err => {
        message.channel.send(`${err.name}: ${err.message}`)
        console.log(`${err.name}: ${err.message}`)
      })
      
    } else {
      return
    }
    
  }
}
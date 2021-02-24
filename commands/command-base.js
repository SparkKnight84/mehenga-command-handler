const config = require(`../config.js`)
const PREFIX = config.PREFIX
const prefix = PREFIX
module.exports = (client, commandOptions) => {
  let {
    commands,    
    callback
  } = commandOptions
  
  console.log(`[LOG] Loaded command: ${commands[0]}`)
  
  client.on(`message`, message => {    
    for(const alias of commands){      
      if(message.content.toLowerCase().startsWith(prefix + alias.toLowerCase())){
        const args = message.content.slice(prefix.length).split(/ +/)
        callback(message, args, client)
      }
    }    
  })
}
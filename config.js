
//The default prefix for your bot
const PREFIX = ">"

//The base file for this command handler
//Dont touch it unless you know what you are doing
const basefile = "command-base.js"

//Discord ids of people you consider as your bot's admins
//Perple whose ids are here will be able to use owner commands like eval and reboot
const admin_ids = [
  '520580249252265995'
]


module.exports = { PREFIX, basefile, admin_ids }

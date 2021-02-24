const Discord = require(`discord.js`)
const client = new Discord.Client()
const path = require(`path`)
const fs = require(`fs`)

const config = require(`./config.js`)
const PREFIX = config.PREFIX
const basefile = config.basefile

client.on('ready', () => {
  console.log(`[READY] Logged in as: ${client.user.tag}`)
  console.log(`[READY] With globle prefix: ${PREFIX}`)
    
  const commandBase = require(`./commands/${basefile}`)
  
  const readCommands = dir => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for(const file of files){
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if(stat.isDirectory()){
        readCommands(path.join(dir, file))
      } else if(file !== basefile) {
        const option = require(path.join(__dirname, dir, file))
        //console.log(file, option)
        commandBase(client, option)
      }
    }
  }
  readCommands("commands")
})

const token = process.env.TOKEN
client.login(token).catch(err => console.log(`[ERROR]: ${err}`))
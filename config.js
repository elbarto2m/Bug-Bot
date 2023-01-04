/**
   * Create By  BARTO
   * Base by Dika Ardnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}


global.ownername = '@⁨«{>𝕩Elbarto Senpai <}»⁩'
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)
// Other
global.owner = ['2349159807687']
global.premium = ['2349159807687']
global.packname = 'The barto bot'
global.author = 'WhatsApp Bot'
global.wlcm = []
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🚬','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓Done sir!',
    admin: 'you are not an admin of this group!',
    botAdmin: 'you are not my owner so shussh cause this can be used by my owner only!',
    owner: 'This command is not for someone for you',
    group: 'Features can only be used in group, BAKA!',
    private: 'Check Private Chat!',
    bot: 'Special features of numbers users Bot',
    wait: 'Loading almost done ay!...',
    endLimit: 'your limit has ended!',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/jo.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

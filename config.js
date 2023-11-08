const chalk = require("chalk")
const fs = require("fs")

global.linkgc ="-" //isi link gc lu
global.linktt ="-" //isi link tiktok lu

global.botname ="MnnV1" //nama bot
global.botnumber ="-" //nomer bot
global.ownername ="MannHost" //nama owner
global.ownernumber="-" //nomer owner
global.running ="Pterodactyl"
global.versisc ="1.0.0" //versi sc
global.prefa = ['', '.']
global.hituet = 0

global.owner="" //nomer owner

global.lol = 'MannHost'
global.xzn = 'MannHost'
global.APls = {
	alfa: 'https://api.zahwazein.xyz'
}
global.APIkeys = {
	'https://api.zahwazein.xyz': 'zenkey_ae110e5bf705',
}

global.lol = 'MannHost' // : https://api.lolhuman.xyz 
global.keyopenai = "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" // : https://platform.openai.com
global.apikey = "zenzkey_ae110e5bf705" // : https://api.zahwazein.xyz

//stiker kok
global.themeemoji = '✨'
global.wm = "MnnV1"
global.packname = "Created By"
global.author = "MannHost"

global.mess = {
done: 'Done✅',
success: 'Done✅',
dev: 'Fitur Ini Khusus Developer Bot Kak!!',
admin: 'Fitur Ini Khusus Admin Grup Kak!!',
botAdmin: 'Jadikan Bot Admin Terlebih Dahulu Kak!!',
owner: 'Fitur Ini Khusus Owner Bot Kak!!',
group: 'Cuma Bisa Di Gunakan Di Dalam Grup Kak!!',
endLimit: 'Limit Lu Habis Kak!!',
prem: 'Fitur Khusus User Prem Kak!!',
wait: 'Lagi Diproses Kak!!',
}

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
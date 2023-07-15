const fs = require('fs')
const chalk = require('chalk')

global.domain = "Domain Lu" // Isi Domain Lu
global.apikey = 'ptla_LMxNfqWjmPS8VBsvo7yUOc2YNN8fMhj7fC1jKB90FwL' // Isi Apikey Plta Lu
global.capikey = 'ptlc_B4gvq2t1szbn3KJNs2uxADLhhvBqkP7IzK1Wuycn8Ra' // Isi Apikey Pltc Lu
global.creAtor = "@s.whatsapp.net" // isi nomor lu
global.owner = ['6281354347695','6281354347695'] // isi nomor lu sama nomor bot lu
global.ownerNumber = ["@s.whatsapp.net"] // nomor owner bot
global.nomerOwner = "6281354347695" // nomor owner lagi
global.namabotnya = ''Vallzyy || Bot // nama bot lu
global.namaownernya = ''Vallzyy_Store // nama owner
global.packname = ' ||+62🇲🇨\nI`m From Indonesia'
global.author = 'Wa : 08**-****-****\n'
global.sessionName = 'ByRizkyEditz'
global.email = '-@gmail.com' // alamat email lu
global.group = 'https://chat.whatsapp.com/' // group bot lu
global.youtube = 'https://youtube.com/@' // youtube lu
global.website = 'https://fakebokep.biz'
global.github = 'https://github.com/ZassXdOfficial'
global.nomorowner = 'https://wa.me/6281354347695'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.qris = fs.readFileSync(`./qris.jpeg`)
global.krmd = 
{
success: '```Success✅```',
admin: '```Fitur Khusus Admin Group!!!```',
botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
owner: '```Fitur Khusus Owner!!!```',
group: '```Fitur Digunakan Hanya Untuk Group!!!```',
private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
error: '```Mungkin Lagi Error Kak Harap Lapor Bang Rizky         Biar Langsung Di Benerin🙏```',
wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./RizkyEditz/image/thumb.jpg')
global.imagekir = fs.readFileSync('./RizkyEditz/image/rizky.jpg')
global.videokir = fs.readFileSync('./RizkyEditz/image/rizky.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
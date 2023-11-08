var spin = require('spinnies')

var spinner = { 
"interval": 120,
"frames": [
"🕛 Mn",
"🕐 Mnn ",
"🕑 MnnV1",
"🕒 MnnV1 By",
"🕓 MnnV1 By Man",
"🕔 MnnV1 By MannH",
"🕕 MnnV1 By MannHost",
"🕖 MnnV1 By MannH",
"🕗 MnnV1 By Man",
"🕘 MnnV1 By",
"🕙 MnnV1",
"🕚 Mnn ",
"🕛 Mn"
]}

let globalSpinner;
var getGlobalSpinner = (disableSpins = false) => {
if(!globalSpinner) globalSpinner = new spin({ color: 'white', succeedColor: 'blue', spinner, disableSpins});
return globalSpinner;
}
spins = getGlobalSpinner(false)
module.exports.start = (id, text) => {
spins.add(id, {text: text})
}
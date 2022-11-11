const merge = require('deepmerge')
const widoConf = require('./wdio.conf.js')
exports.config = merge(widoConf.config,{

baseUrl: 'https://rahulshettyacademy.com',
waitforTimeout: 5000, 
mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    grep:"sanity"
},

})
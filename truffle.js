// Allows us to use ES6 in our migrations and tests.
require('@babel/register')
require('@babel/polyfill')

const { development, rinkeby, main } = require('./.config.js')

var HDWalletProvider = require('truffle-hdwallet-provider')

module.exports = {
  networks: {
    mainnet: {
      provider: new HDWalletProvider(main.MNEMONIC, main.PROVIDER_URL),
      network_id: 1
    },
    rinkeby: {
      provider: new HDWalletProvider(rinkeby.MNEMONIC, rinkeby.PROVIDER_URL),
      network_id: 4,
    },
    // NOTE: port 7545 refers ganache, switch to 9545 when using `truffle develop`
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: "*"
    }
  }
}

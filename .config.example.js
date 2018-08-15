const INFURA_KEY = ''

module.exports = {
  development: {
    NETWORK: 'ganache',
    MNEMONIC:'',
    PROVIDER_URL: 'http://127.0.0.1:7545',
    CONTRACT_ADDRESS: ''
  },
  rinkeby: {
    NETWORK: 'rinkeby',
    MNEMONIC: '',
    PROVIDER_URL: `https://rinkeby.infura.io/${INFURA_KEY}`,
    CONTRACT_ADDRESS: ''
  },
  main: {
    NETWORK: 'mainnet',
    MNEMONIC: '',
    PROVIDER_URL: `https://main.infura.io/${INFURA_KEY}`,
    CONTRACT_ADDRESS: ''
  }
}

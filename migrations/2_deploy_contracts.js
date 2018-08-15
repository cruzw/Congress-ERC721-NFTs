var signale = require('signale')
var CongressToken = artifacts.require("./CongressToken.sol");


module.exports = function(deployer, network, accounts) {
  let instance;
  signale.debug(`
    deployer: ${deployer}
    network: ${network}
    accounts: ${accounts}
  `)

  deployer.deploy(CongressToken)
};

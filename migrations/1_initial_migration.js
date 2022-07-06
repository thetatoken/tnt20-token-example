const Migrations = artifacts.require("Migrations");
const TNT20 = artifacts.require("TNT20");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Migrations);

  let name = "Test Token"
  let symbol = "TEST"
  let decimals = 18
  let initDistrWallet = accounts[1]
  let initMintAmount = 1000
  let admin = accounts[2]
  deployer.deploy(TNT20, name, symbol, decimals, initDistrWallet, initMintAmount, admin)
};

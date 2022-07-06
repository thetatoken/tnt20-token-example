const HDWalletProvider = require('@truffle/hdwallet-provider');
 
module.exports = {
  mocha: {
    enableTimeouts: false,
    before_timeout: 480000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.7",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
        enabled: true,
        runs: 200
      }
      //  evmVersion: "byzantium"
      }
    }
  },
 
  networks: {
    // dev: {
    //   host: "localhost",
    //   network_id: 3456,
    //   port: 8545,
    //   gas: 20000000
    // },

    ganache: {
      provider: () => {
        var deployerPrivateKey        = '1111111111111111111111111111111111111111111111111111111111111111';
        var initDistrWalletPrivateKey = '2222222222222222222222222222222222222222222222222222222222222222';
        var adminPrivateKey           = '3333333333333333333333333333333333333333333333333333333333333333';
 
        return new HDWalletProvider({
          privateKeys: [deployerPrivateKey, initDistrWalletPrivateKey, adminPrivateKey],
          providerOrUrl: 'http://127.0.0.1:8545',
        });
      },
      network_id: 3456,
      gas: 20000000
    },

    theta_testnet: {
      provider: () => {
 
        // IMPORTANT: Please replace the private keys below with the private key of the actual deployer, i
        //            the initial token distribution wallet, and the admin wallet. Also make sure the deployer 
        //             wallet has a sufficient amount of Testnet TFuel, e.g. 100 TFuel
        var deployerPrivateKey        = '1111111111111111111111111111111111111111111111111111111111111111';
        var initDistrWalletPrivateKey = '2222222222222222222222222222222222222222222222222222222222222222';
        var adminPrivateKey           = '3333333333333333333333333333333333333333333333333333333333333333';
        return new HDWalletProvider({
          privateKeys: [deployerPrivateKey, initDistrWalletPrivateKey, adminPrivateKey],
          providerOrUrl: 'https://eth-rpc-api-testnet.thetatoken.org/rpc',
        });
      },
      network_id: 365,
      gasPrice: 4000000000000,
    },

    theta_mainnet: {
      provider: () => {
 
        // IMPORTANT: Please replace the private keys below with the private key of the actual deployer, i
        //            the initial token distribution wallet, and the admin wallet. Also make sure the deployer 
        //             wallet has a sufficient amount of Mainnet TFuel, e.g. 100 TFuel
        var deployerPrivateKey        = '';
        var initDistrWalletPrivateKey = '';
        var adminPrivateKey           = '';

        return new HDWalletProvider({
          privateKeys: [deployerPrivateKey, initDistrWalletPrivateKey, adminPrivateKey],
          providerOrUrl: 'https://eth-rpc-api.thetatoken.org/rpc',
        });
      },
      network_id: 361,
      gasPrice: 4000000000000,
    }
  }
};
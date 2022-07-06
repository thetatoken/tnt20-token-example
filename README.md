# Theta Network TNT20 Token Example


Note 1: The [TNT20 example contract]() used in example is just for demostration purpose. It is not meant for production.

Note 2: For simplicity, we are using insecure private keys such as `0x1111...11111` in this example ([here](), [here](), and [here]()). Please use secure private keys for your actual contract deployments.

## 1. Setup

Please install Truffle and the Ganache suite.

Next, clone this repository and install dependencies.

```
git clone https://github.com/thetatoken/tnt20-token-example
cd tnt20-token-example
npm install
```

## 2. Compilation

Compile the smart contracts under the `contracts/` folder with the following command. Make sure there is no compilation errors.

```
truffle compile
```

## 3. Interact with the TNT20 contract on a local simulated network

### 3.1. Launch a local simulated blockchain

Open an terminal, and execute the command below to using the "ganache-cli" tool


```bash
ganache-cli --account='0x1111111111111111111111111111111111111111111111111111111111111111',10000000000000000000000 --account='0x2222222222222222222222222222222222222222222222222222222222222222',10000000000000000000000 --account='0x3333333333333333333333333333333333333333333333333333333333333333',10000000000000000000000 --account='0x4444444444444444444444444444444444444444444444444444444444444444',10000000000000000000000 --account='0x5555555555555555555555555555555555555555555555555555555555555555',10000000000000000000000 --account='0x6666666666666666666666666666666666666666666666666666666666666666',10000000000000000000000 --account='0x7777777777777777777777777777777777777777777777777777777777777777',10000000000000000000000 --account='0x8888888888888888888888888888888888888888888888888888888888888888',10000000000000000000000 --account='0x9999999999999999999999999999999999999999999999999999999999999999',10000000000000000000000 --account='0x1000000000000000000000000000000000000000000000000000000000000000',10000000000000000000000 --networkId 3456 --port 8545
```

### 3.2. Deployment to the local simulated network


Now, in a second terminal, deploy the TNT20 token contract to the local simulated network with the following command:

```
truffle migrate --reset --compile-all --network=ganache
```

The above command should print out logs similar to the following. Please note down the contract address. 

```
1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   ...

   Deploying 'TNT20'
   -----------------
   ...
   > contract address:    0xEA5925517A4Ab56816DF07f29546F8986A2A5663
   ...

```

### 3.3. Send the TNT20 token


```
node scripts/send_token.js <Network> <TNT20ContractAddress> <SenderAddress> <RecieverAddress> <AmountInWei>
```

```
node scripts/query_token_balance.js <Network> <WalletAddress>
```

## 4. Interact with the TNT20 contract on the Theta Testnet


### 4.1. Deploy to the testnet

Before running the following commoands, please make sure the following addresses on the Theta Testnet has sufficient amount of TFuel (at least 100 TFuel):

Deployer wallet: [0x19E7E376E7C213B7E7e7e46cc70A5dD086DAff2A](https://testnet-explorer.thetatoken.org/account/0x19E7E376E7C213B7E7e7e46cc70A5dD086DAff2A)
Initial token pool wallet: [0x1563915e194D8CfBA1943570603F7606A3115508](https://testnet-explorer.thetatoken.org/account/0x1563915e194D8CfBA1943570603F7606A3115508)
Admin wallet: [0x5CbDd86a2FA8Dc4bDdd8a8f69dBa48572EeC07FB](https://testnet-explorer.thetatoken.org/account/0x5CbDd86a2FA8Dc4bDdd8a8f69dBa48572EeC07FB)

Note: The private keys of the above accounts are `0x1111...11111`, `0x2222...22222`, and `0x3333...33333`, respectively (see [here]() and [here]()). This just for demonstration purpose. In your actual mainnet deployment, please use secure private keys, and make sure the corresponding wallet addresses have sufficient amount of TFuels.

Next, run the following command to deploy the TNT20 token contract to the Theta Testnet.

```
truffle migrate --reset --compile-all --network=theta_testnet
```




# Theta Network TNT20 Token Tutorial

In this tutorial, we will demonstrate how to deploy a TNT20 token (ERC20 equivalent on Theta) to the Theta Testnet, query the token balance of a wallet, and send TNT20 tokens between two wallets. 

Before you proceed, we would like to emphasize that the [TNT20 example contract](./contracts/TNT20.sol) used in this tutorial is just for demostration purpose. It is NOT meant for production. Furthermore, for simplicity, we are using **insecure private keys** such as `0x1111...11111` in this tutorial ([here](), [here](), and [here]()). Please use secure private keys for your production contract deployments.

## 1. Setup

This tutorial will use Truffle and Ganache for contract deployment and testing. Please install these tools following the instructions [here](https://trufflesuite.com/docs/truffle/getting-started/installation/) and [here](https://www.trufflesuite.com/ganache).

Next, clone this repository and install dependencies.

```
git clone https://github.com/thetatoken/tnt20-token-example
cd tnt20-token-example
npm install
```

## 2. Smart Contract Compilation

Compile the smart contracts under the `contracts/` folder with the following command. Make sure there is no compilation error.

```
truffle compile
```

## 3. Deploy and interact with the TNT20 contract on a local simulated network

### 3.1. Launch a local simulated blockchain

Open an terminal, and execute the command below to start a simulated blockchain with the "ganache-cli" tool

```bash
ganache-cli --networkId 3456 --port 8545 -l 20000000 --account='0x1111111111111111111111111111111111111111111111111111111111111111',10000000000000000000000 --account='0x2222222222222222222222222222222222222222222222222222222222222222',10000000000000000000000 --account='0x3333333333333333333333333333333333333333333333333333333333333333',10000000000000000000000 --account='0x4444444444444444444444444444444444444444444444444444444444444444',10000000000000000000000 --account='0x5555555555555555555555555555555555555555555555555555555555555555',10000000000000000000000 --account='0x6666666666666666666666666666666666666666666666666666666666666666',10000000000000000000000 --account='0x7777777777777777777777777777777777777777777777777777777777777777',10000000000000000000000 --account='0x8888888888888888888888888888888888888888888888888888888888888888',10000000000000000000000 --account='0x9999999999999999999999999999999999999999999999999999999999999999',10000000000000000000000 --account='0x1000000000000000000000000000000000000000000000000000000000000000',10000000000000000000000
```

### 3.2. Deployment to the local simulated network

Now, in a second terminal, deploy the TNT20 token contract to the local simulated network with the following command:

```
truffle migrate --reset --compile-all --network=ganache
```

The above command should print out logs similar to the following (the contract address might be different). Please note down the contract address. 

```
1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   ...

   Deploying 'TNT20'
   -----------------
   ...
   > contract address:    0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF
   ...

```

### 3.3 Print the TNT20 token details

You can print the name, symbol, decimals and total supply of the TNT20 token you just deployed using the following command. Please use `ganache` as the `<Network>` parameter, and the contract address printed above as the `<TNT20TokenContractAddress>`:

```
node scripts/print_tnt20_token_details.js <Network> <TNT20TokenContractAddress>

// e.g.
node scripts/print_tnt20_token_details.js ganache 0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF
```

The script should print out something like

```
==================== Token details =====================
Address     : 0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF
Name        : Awsome Token
Symbol      : AT
Decimals    : 18
Total supply: 100000000000000000000000000 AT Wei
```

As you can see, the name and symbol are what we set in the `migrations/1_initial_migration.js` [deployment script](./migrations/1_initial_migration.js). The token has 18 decimals, which is a default setting for TNT20 tokens. TNT20 token contracts typically support fractional tokens (just as 1 US Dollar equals to 100 cents). The value of "decimals" indicates how many 0’s there are to the right of the decimal point the fixed-point representation of a token. As we set the decimals of the token to 18, one AT Token equals 10^18 AT Wei, where "Wei" is the smallest fraction of the token. The total supply is `100000000000000000000000000 AT Wei`, which is equal to 100,000,000 AT tokens as we specified in the [deployment script](./migrations/1_initial_migration.js).

### 3.4. Query the TNT20 token balance of a wallet

We provide 

### 3.5. Send the TNT20 token

In the following example, we 
```
node scripts/send_tnt20_token.js <Network> <TNT20TokenContractAddress> <SenderPrivateKey> <ReceiverAddress> <AmountInWei>

// e.g.
node scripts/send_tnt20_token.js ganache 0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF <SenderPrivateKey> <ReceiverAddress> <AmountInWei>
```

```
node scripts/query_token_balance.js <Network> <WalletAddress>
```

## 4. Deploy and interact with the TNT20 contract on the Theta Testnet


### 4.1. Preparation

Before running the following commoands, please make sure the following addresses on the Theta Testnet has sufficient amount of TFuel (at least 100 TFuel):

Deployer wallet: [0x19E7E376E7C213B7E7e7e46cc70A5dD086DAff2A](https://testnet-explorer.thetatoken.org/account/0x19E7E376E7C213B7E7e7e46cc70A5dD086DAff2A)

Initial token pool wallet: [0x1563915e194D8CfBA1943570603F7606A3115508](https://testnet-explorer.thetatoken.org/account/0x1563915e194D8CfBA1943570603F7606A3115508)

Admin wallet: [0x5CbDd86a2FA8Dc4bDdd8a8f69dBa48572EeC07FB](https://testnet-explorer.thetatoken.org/account/0x5CbDd86a2FA8Dc4bDdd8a8f69dBa48572EeC07FB)

**Note**: The private keys of the above accounts are `0x1111...11111`, `0x2222...22222`, and `0x3333...33333`, respectively (see [here]() and [here]()). This just for demonstration purpose. For your actual mainnet deployment, please use secure private keys, and make sure the corresponding wallet addresses have sufficient amount of TFuels.

### 4.2. Deploy to the Theta Testnet

Next, run the following command to deploy the TNT20 token contract to the Theta Testnet.

```
truffle migrate --reset --compile-all --network=theta_testnet
```

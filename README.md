# Theta Network TNT20 Token Tutorial

In this tutorial, we will demonstrate how to deploy a TNT20 token (ERC20 equivalent on Theta) to the Theta Testnet, query the token balance of a wallet, and transfer TNT20 tokens between two wallets. 

Before you proceed, we would like to emphasize that the [TNT20 example contract](./contracts/TNT20.sol) used in this tutorial is just for demostration purpose. It is NOT meant for production. Furthermore, for simplicity, we are using **insecure private keys** such as `0x1111...11111` and `0x2222...22222` in this tutorial. Please use secure private keys for your production contract deployments.

## 1. Setup

This tutorial will use Truffle and Ganache for contract deployment and testing. Please install these tools following the instructions [here](https://trufflesuite.com/docs/truffle/getting-started/installation/) and [here](https://www.trufflesuite.com/ganache). To learn more about smart contract development with the Truffle suite, please check out [this link](https://trufflesuite.com/tutorial/).

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

Now, **open a new terminal**, and deploy the TNT20 token contract to the local simulated network with the following command:

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

You can print the name, symbol, decimals and total supply of a TNT20 token using the `scripts/print_tnt20_token_details.js` script:

```
node scripts/print_tnt20_token_details.js <Network> <TNT20TokenContractAddress>
```

Assuming the contract address is `0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF`, we can query the details of the TNT20 token we just deployed with the following command:

```
node scripts/print_tnt20_token_details.js ganache 0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF
```

The script should print out something like

```
==================== Token details =====================
Address     : 0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF
Name        : Awesome Token
Symbol      : AST
Decimals    : 18
Total supply: 100000000000000000000000000 AST Wei
```

As you can see, the name and symbol are what we set in the `migrations/1_initial_migration.js` [deployment script](./migrations/1_initial_migration.js). The token has 18 decimals, which is a default setting for TNT20 tokens. TNT20 token contracts typically support fractional tokens (just as 1 US Dollar equals to 100 cents). The value of "decimals" indicates how many 0’s there are to the right of the decimal point the fixed-point representation of a token. As we set the decimals of the token to 18, one AST Token equals 10^18 AST Wei, where "Wei" is the smallest fraction of the token. The total supply is `100000000000000000000000000 AST Wei`, which is equal to 100,000,000 AST tokens as we specified in the [deployment script](./migrations/1_initial_migration.js).

### 3.4. Query the TNT20 token balance of a wallet

You can query the TNT20 token balance of a wallet using script `scripts/query_tnt20_token_balance.js`:

```
node scripts/query_tnt20_token_balance.js <Network> <TNT20TokenContractAddress> <WalletAddress>
```

For instance, you can query the token balance of wallet address `0x1563915e194D8CfBA1943570603F7606A3115508`:

```
node scripts/query_tnt20_token_balance.js ganache 0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF 0x1563915e194D8CfBA1943570603F7606A3115508
```

Note that this wallet the the "initial distribution wallet" specified in the [deployment script](./migrations/1_initial_migration.js). Hence its balance should be `100000000000000000000000000 AST Wei`, which is equal to 100,000,000 AST tokens.

### 3.5. Send the TNT20 token between two wallets

We have prepare a script `scripts/send_tnt20_token.js` for transfering TNT20 tokens between two wallets:

```
node scripts/send_tnt20_token.js <Network> <TNT20TokenContractAddress> <SenderPrivateKey> <ReceiverAddress> <AmountInWei>
```

The following command sequence queries the token balance of the sender and receiver wallet before and after the token transfer. As the print out shows `999999999 AST Wei` was sent from the sender address to the receiver address. The sender is the initial distribution wallet address `0x1563915e194D8CfBA1943570603F7606A3115508`, whose private key is `2222222222222222222222222222222222222222222222222222222222222222`.

```
// Query the token balance of the sender address before the transfer
node scripts/query_tnt20_token_balance.js ganache 0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF 0x1563915e194D8CfBA1943570603F7606A3115508

// Query the token balance of the receiver address before the transfer
node scripts/query_tnt20_token_balance.js ganache 0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF 0x5CbDd86a2FA8Dc4bDdd8a8f69dBa48572EeC07FB

// Send 999999999 AST Wei from 0x1563915e194D8CfBA1943570603F7606A3115508 to 0x5CbDd86a2FA8Dc4bDdd8a8f69dBa48572EeC07FB
node scripts/send_tnt20_token.js ganache 0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF 2222222222222222222222222222222222222222222222222222222222222222 0x5CbDd86a2FA8Dc4bDdd8a8f69dBa48572EeC07FB 999999999

// Query the token balance of the sender address after the transfer, the balance should decrease by 999999999
node scripts/query_tnt20_token_balance.js ganache 0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF 0x1563915e194D8CfBA1943570603F7606A3115508

// Query the token balance of the receiver address after the transfer the balance should increase by 999999999
node scripts/query_tnt20_token_balance.js ganache 0x73b647cbA2FE75Ba05B8e12ef8F8D6327D6367bF 0x5CbDd86a2FA8Dc4bDdd8a8f69dBa48572EeC07FB
```

## 4. Deploy and interact with the TNT20 contract on the Theta Testnet

In the section, we show how you can deploy the TNT20 contract to the Theta Testnet, query the token balances, and send tokens between wallets.

### 4.1. Preparation

Before running the following commoands, please make sure the following addresses on the Theta Testnet has sufficient amount of TFuel (at least 100 TFuel):

Deployer wallet: [0x19E7E376E7C213B7E7e7e46cc70A5dD086DAff2A](https://testnet-explorer.thetatoken.org/account/0x19E7E376E7C213B7E7e7e46cc70A5dD086DAff2A)

Initial distribution wallet: [0x1563915e194D8CfBA1943570603F7606A3115508](https://testnet-explorer.thetatoken.org/account/0x1563915e194D8CfBA1943570603F7606A3115508)

**Note**: The private keys of the above accounts are `0x1111...11111` and `0x2222...22222`, respectively (e.g. see [here]()). This just for demonstration purpose. For your actual mainnet deployment, please use secure private keys, and make sure the corresponding wallet addresses have sufficient amount of TFuels.

### 4.2. Deploy to the Theta Testnet

Next, run the following command to deploy the TNT20 token contract to the Theta Testnet. Please note down the contract address printed by the `truffle migrate` command.

```
truffle migrate --reset --compile-all --network=theta_testnet
```

### 4.3 Print the TNT20 token details

Use the following command to print details of a token deployed on the Theta Testnet:

```
node scripts/print_tnt20_token_details.js theta_testnet <TNT20TokenContractAddress>
```

### 4.4. Query the TNT20 token balance of a wallet

Use the following command to query the TNT20 token balance of a wallet on the Theta Testnet:

```
node scripts/query_tnt20_token_balance.js theta_testnet <TNT20TokenContractAddress> <WalletAddress>
```

### 4.5. Send the TNT20 token between two wallets

Use the following command to send TNT20 tokens between two wallets on the Theta Testnet:

```
node scripts/send_tnt20_token.js theta_testnet <TNT20TokenContractAddress> <SenderPrivateKey> <ReceiverAddress> <AmountInWei>
```

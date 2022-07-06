# Theta Network TNT20 Token Example

## Setup

```
git clone https://github.com/thetatoken/tnt20-token-example
cd tnt20-token-example
npm install
```

## Compilation

```
truffle compile
```

## Interact with the TNT20 contract on a local simulated network

### Launch a local simulated blockchain 

Execute the command below to using the "ganache-cli" tool


```bash
ganache-cli --account='0x1111111111111111111111111111111111111111111111111111111111111111',10000000000000000000000 --account='0x2222222222222222222222222222222222222222222222222222222222222222',10000000000000000000000 --account='0x3333333333333333333333333333333333333333333333333333333333333333',10000000000000000000000 --account='0x4444444444444444444444444444444444444444444444444444444444444444',10000000000000000000000 --account='0x5555555555555555555555555555555555555555555555555555555555555555',10000000000000000000000 --account='0x6666666666666666666666666666666666666666666666666666666666666666',10000000000000000000000 --account='0x7777777777777777777777777777777777777777777777777777777777777777',10000000000000000000000 --account='0x8888888888888888888888888888888888888888888888888888888888888888',10000000000000000000000 --account='0x9999999999999999999999999999999999999999999999999999999999999999',10000000000000000000000 --account='0x1000000000000000000000000000000000000000000000000000000000000000',10000000000000000000000 --networkId 3456 --port 8545
```

### Deployment to the local simulated network


Deploy the TNT20 token contract to the local simulated network


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
   > transaction hash:    0x13f13d1abfbe39971f1b9e0589588e0c8993450b7f91a6bc900273deb346ba9a
   ...
   > contract address:    0xEA5925517A4Ab56816DF07f29546F8986A2A5663
   ...

```

### Send the TNT20 token

```
node scripts/send_token.js 
```

```
node scripts/query_token_balance.js 
```

## Interact with the TNT20 contract on the Theta Testnet


### Deploy to the testnet

```
truffle migrate --reset --compile-all --network=theta_testnet
```





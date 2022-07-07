const { exit } = require("process");
const { getContext, tnt20TokenABI } = require('./utils')
const { Web3 } = require('web3')
const BN = Web3.utils.BN

// Create transaction
const sendTNT20Token = async(network, tnt20TokenContractAddr, senderPrivateKey, receiverAddr, tnt20TokenAmountInWei) => {
    let {web3, _} = getContext(network)
    tokenName = await tnt20TokenContract.methods.symbol().call()
    let senderAddr = web3.eth.accounts.privateKeyToAccount(senderPrivateKey).address;

    console.log("Attempting to send", tnt20TokenAmountInWei, " Wei of", tokenName, "from", senderAddr, "to", receiverAddr);

    const tnt20TokenContract = new web3.eth.Contract(tnt20TokenABI, tnt20TokenContractAddr)
    const count = await web3.eth.getTransactionCount(senderAddr);
    const createTransaction = await web3.eth.accounts.signTransaction({
         "from": senderAddr,
         "nonce": web3.utils.toHex(count),
         "gas": web3.utils.toHex(150000),
         "to": tdropContractAddress,
         "data": tnt20TokenContract.methods.transfer(receiverAddr, tnt20TokenAmountInWei).encodeABI()
       },
       senderPrivateKey
    );
 
    // Deploy transaction
    const createReceipt = await web3.eth.sendSignedTransaction(
       createTransaction.rawTransaction
    );
 
    console.log("");
    console.log("Transaction successful with hash:", createReceipt.transactionHash);
    console.log("");
    console.log("Transaction details:", JSON.stringify(createReceipt, null, "  "));
 };
 
//
// MAIN
//

const args = process.argv.slice(2);
if (args.length != 5) {
    console.log("Usage:")
    console.log("    node scripts/send_tnt20_token.js <Network> <TNT20TokenContractAddress> <SenderPrivateKey> <ReceiverAddress> <AmountInWei>")
    console.log("")
    exit(1)
}

let network = args[0]
let tnt20TokenContractAddr = args[1]
let senderPrivateKey = args[2]
let receiverAddr = args[3]
let tnt20TokenAmountInWei = new BN(args[4])

sendTNT20Token(network, tnt20TokenContractAddr, senderPrivateKey, receiverAddr, tnt20TokenAmountInWei)



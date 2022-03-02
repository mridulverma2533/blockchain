
const Web3 = require("web3")

exports.balance = async (req,res)=>{
    try{
        const {address,rpcurl} = req.body;
    
        const web3 = await new Web3(rpcurl)

const Balance = await web3.eth.getBalance(address).then(console.log)

res.send("see your console terminal")


    }catch(e){
        console.log(e);
        res.status(500).json(e)
    }
},
exports.sendbalance =async (req,res)=>{
    try{
        const {rpcurl,address,privatekey,receiver}=req.body
        const web3 = new Web3(rpcurl)
        // const {add}=req.body
     const add = address
    //  const {private}=req.body
const key = privatekey
// const {receiv = req.body

const receiv = receiver
const deploy = async ()=>{
    console.log(`sending a transaction from ${add} to ${receiv}` );
    const createtransaction = await web3.eth.accounts.signTransaction({
        from:add,
        To:receiv,
        value:1000000000,
        gas:100000
    },key)

    const receipt = await web3.eth.sendSignedTransaction(createtransaction.rawTransaction);
    console.log(`transaction successful with hash:${receipt.transactionHash}`);
}
deploy()
res.send("transaction successful see your console terminal")


    }catch(e){
        console.log(e);
        res.status(500).send(e)
    }
}
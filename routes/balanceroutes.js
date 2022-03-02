const router=require("express").Router();

const controller = require("../controller/balancecontroller")

router.post("/fetchbalance",controller.balance)
router.post("/sendbalance",controller.sendbalance)


module.exports=router;
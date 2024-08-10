const { Router } = require("express");
const { createproudct, findproudctall, findproudct, deleteproudct, Updateproudct, createproudcts } = require("../controller/prodctcontroller");

const proudctRouter = Router();


proudctRouter.post("/createproudct", createproudct);
proudctRouter.post("/findproudctall",findproudctall);
proudctRouter.post("/findproudct", findproudct);
proudctRouter.post("/deleteproudct", deleteproudct)
proudctRouter.post("/Updateproudct", Updateproudct);
proudctRouter.post("/createproudcts", createproudcts);

// userRouter.post("/login", (req , res) =>  login(req , res));

module.exports = proudctRouter;
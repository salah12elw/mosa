const { Router } = require("express");
const { login, createNewUser, cal, UpdateUser, deleteuser, findUser, createuser } = require('../controller/userconntroller');

const userRouter = Router();


userRouter.post("/createNewUser", createNewUser);
userRouter.post("/findUser", findUser);
userRouter.post("/deleteuser", deleteuser)
userRouter.post("/UpdateUser", UpdateUser);
userRouter.post("/login", login);
userRouter.post("/cal", cal);
// userRouter.post("/createusers", createusers);

// userRouter.post("/login", (req , res) =>  login(req , res));

module.exports = userRouter;
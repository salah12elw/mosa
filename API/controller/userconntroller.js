const User_Model = require("../models/user.model");

// app.post("/createuser",
const createNewUser = async (req, res) => {
  const { name, age, pass, phone,points } = req.body;
  User_Model.create({
    name:name,
    age:age,
    pass:pass,
    phone:phone,
    points
  })
.then((createRes)=>{
  res.status(200).json({user:createRes._doc});
})
.catch((e)=>
  res.status(500).json({error:true,errorMessage:e.message})
);
};




// app.post("/findUser", 
   const findUser = async (req, res) => {
    const {name} = req.body;
  
    try{
      const user = await User_Model.findOne({name:name})
    
      res.status(200).json({
        return: user,
      });
  
    }catch(error){
      res.status(500).json({
        error: error.message,
      });
    }
  };


//   app.post("/deleteuser",
    const deleteuser = async (req, res) => {
    const {name} = req.body;
  
    try{
      const user = await User_Model.deleteOne({name:name})
    
      res.status(200).json({
        return: user,
      });
  
    }catch(error){
      res.status(500).json({
        error: error.message,
      });
    }
  };


//   app.post("/UpdateUser", 
    const UpdateUser = async (req, res) => {
    const {name, age} = req.body;
  
    try{
      const user = await User_Model.findOneAndUpdate(
        {name:name},
        {age:age},
        {new:true,runValidators:true}
      )
    
      res.status(200).json({
        return: user,
      });
  
    }catch(error){
      res.status(500).json({
        error: error.message,
      });
    }
  };


//   app.post("/login", 
    const login = async (req, res) => {
    const {phone,pass} = req.body;
  
    try{
      const user = await User_Model.findOne({phone:phone,pass:pass})
    
      res.status(200).json({
        return: "login sucsses",
        user:user
      });
  
    }catch(error){
      res.status(500).json({
        error: error.message,
      });
    }
  };


//   app.post("/cal",
    const cal = async (req, res) => {
  
    try{
      const {age} = req.body;
      const user = await User_Model.find({age:{$gt:age}})
    
      res.status(200).json({
        return: user,
      });
  
    }catch(error){
      res.status(500).json({
        error: error.message,
      });
    }
  };


//   app.post("/createusers", 
    const createusers = async (req, res) => {
    const usersArray = req.body;
  
    try{
      const user = await User_Model.insertMany(usersArray);
    
      res.status(200).json({
        return: user,
      });
  
    }catch(error){
      res.status(500).json({
        error: error.message,
      });
    }
  };



module.exports = {
  createNewUser,
  findUser,
  deleteuser,
  UpdateUser,
  login,
  cal,
  createusers,
};
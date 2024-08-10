const proudct_MODEL = require("../models/proudctmodel");

// app.post("/createuser",
const createproudct = async (req, res) => {
  const { name, price, image } = req.body;

  try {
    const proudct = await proudct_MODEL.create({
      name,price,image,
    });

    res.status(200).json({
      return: proudct,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// app.post("/findUserall",
const findproudctall = async (req, res) => {
  const { name } = req.body;
  const query = name ? { name: name } : {};

  try {
    const proudct = await proudct_MODEL.find(query);

    res.status(200).json({
      return: proudct,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

// app.post("/findUser",
const findproudct = async (req, res) => {
  const { name } = req.body;

  try {
    const proudct = await proudct_MODEL.findOne({ name: name });

    res.status(200).json({
      return: proudct,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//   app.post("/deleteuser",
const deleteproudct = async (req, res) => {
  const { name } = req.body;

  try {
    const proudct = await proudct_MODEL.deleteOne({ name: name });

    res.status(200).json({
      return: proudct,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//   app.post("/UpdateUser",
const Updateproudct = async (req, res) => {
  const { name, price, image } = req.body;

  try {
    const proudct = await proudct_MODEL.findOneAndUpdate(
      { name, price, image },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      return: proudct,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

//   app.post("/createusers",
const createproudcts = async (req, res) => {
  const proudctsArray = req.body;

  try {
    const proudct = await proudct_MODEL.insertMany(proudctsArray);

    res.status(200).json({
      return: proudct,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
  createproudct,
  findproudctall,
  findproudct,
  deleteproudct,
  Updateproudct,
  createproudcts,
};
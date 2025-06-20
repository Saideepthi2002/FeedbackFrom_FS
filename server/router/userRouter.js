const express = require("express");
const router = express.Router();
const UsersFeedbackData = require("../models/userdata");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    if (!data || !data.name || !data.email || !data.message) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const newdata = new UsersFeedbackData(data);
    const response = await newdata.save();
    res.status(200).json(response);
    console.log("Data stored in mongodb");
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const response = await UsersFeedbackData.find().sort({ createdAt: -1 });
    res.status(200).json(response);
    console.log("Server is running adn connected to MongooDB Atlas");
  } catch (err) {
    console.error("Error while fetching the feedbacks", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;

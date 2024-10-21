// routes/formSubmission.js
const express = require("express");
const message_router = express.Router();
const {
  createContactForm,
  getAllContactMessages,
} = require("../Service/message_service");

// POST route to handle form submissions
message_router.post("/submit", async (req, res) => {
  try {
    const formSubmission = await createContactForm(req.body);
    res.status(201).json({
      message: "Contact message submitted successfully!",
      data: formSubmission,
    });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ message: "Error submitting contact message.", error });
  }
});

// Get method for get all contact messages

message_router.get("/all", async (req, res) => {
  try {
    const contactMessages = await getAllContactMessages();
    res.status(200).json({ data: contactMessages });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error getting contact messages.", error });
  }
});

module.exports = message_router;

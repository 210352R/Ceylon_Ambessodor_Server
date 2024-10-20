// routes/formSubmission.js
const express = require("express");
const router = express.Router();
const { createFormSubmission } = require("../Service/form_service");

// POST route to handle form submissions
router.post("/submit", async (req, res) => {
  try {
    const formSubmission = await createFormSubmission(req.body);
    res
      .status(201)
      .json({ message: "Form submitted successfully!", data: formSubmission });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Error submitting form.", error });
  }
});

module.exports = router;

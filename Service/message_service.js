// services/contactFormService.js
const ContactMessage = require("../models/ContactMessages"); // Adjust the path as necessary

// Function to create a new contact form submission
const createContactForm = async (data) => {
  try {
    const contactFormEntry = await ContactMessage.create(data);
    return contactFormEntry;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createContactForm,
};

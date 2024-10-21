// services/formSubmissionService.js
const FormSubmission = require("../models/FormSubmission");

const createFormSubmission = async (data) => {
  try {
    const formSubmission = await FormSubmission.create(data);
    return formSubmission;
  } catch (error) {
    throw error; // Rethrow error to be handled by the route
  }
};

module.exports = {
  createFormSubmission,
};

// create method for get all form submissions
const getAllFormSubmissions = async () => {
  try {
    const formSubmissions = await FormSubmission.findAll();
    return formSubmissions;
  } catch (error) {
    throw error;
  }
};

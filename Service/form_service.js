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

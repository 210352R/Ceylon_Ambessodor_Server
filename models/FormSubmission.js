// models/FormSubmission.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database/db"); // Adjust the path as necessary

const FormSubmission = sequelize.define(
  "FormSubmission",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false, // Not allowed to be null
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false, // Not allowed to be null
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false, // Changed to false (not allowed to be null)
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false, // Changed to false (not allowed to be null)
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Not allowed to be null
      validate: {
        isEmail: true, // Validate that the email is in a proper format
      },
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false, // Changed to false (not allowed to be null)
      validate: {
        isUrl: true, // Validate that the website is a proper URL
      },
    },
    solutions: {
      type: DataTypes.JSON, // Storing an array of solutions as JSON
      allowNull: false, // Changed to false (not allowed to be null)
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false, // Not allowed to be null
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false, // Not allowed to be null
    },
    originPostal: {
      type: DataTypes.STRING,
      allowNull: true, // Allowed to be null
    },
    destinationPostal: {
      type: DataTypes.STRING,
      allowNull: true, // Allowed to be null
    },
    specifics: {
      type: DataTypes.TEXT,
      allowNull: true, // Allowed to be null
    },
    additionalInfo: {
      type: DataTypes.TEXT,
      allowNull: true, // Allowed to be null
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = FormSubmission;

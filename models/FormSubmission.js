// models/FormSubmission.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database/db"); // Adjust the path as necessary

const FormSubmission = sequelize.define(
  "FormSubmission",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true, // Validate that the email is in a proper format
      },
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true, // Validate that the website is a proper URL
      },
    },
    solutions: {
      type: DataTypes.JSON, // Storing an array of solutions as JSON
      allowNull: true,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    originPostal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    destinationPostal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    specifics: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    additionalInfo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = FormSubmission;

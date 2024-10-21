// models/ContactForm.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database/db"); // Adjust the path as necessary

const ContactMessages = sequelize.define(
  "ContactMessages",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false, // Not allowed to be null
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false, // Not allowed to be null
      validate: {
        isEmail: true, // Validate that the email is in a proper format
      },
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false, // Not allowed to be null
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

module.exports = ContactMessages;

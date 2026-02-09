const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true   // ✅ FIXED
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }, // ✅ comma added here
  price: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model("User", UserSchema);

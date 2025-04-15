const mongoose = require("mongoose");

const TwitterProfileSchema = mongoose.Schema({
  profilePic: String,
  fullName: String,
  userName: String,
  bio: String,
  companyName: String,
  city: String,
  portfolioLink: String,
  followerCount: Number,
  follwingCount: Number,
  handle: String,
  isOnline: Boolean,
});

const Twitter = mongoose.model("Twitter", TwitterProfileSchema);

module.exports = Twitter;

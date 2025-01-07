const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.statics.signup = async function ({ userName, email, password }) {
  const exists = await this.findOne({ email });

  if (!email || !password) {
    throw Error("Email and password must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid!");
  }

  if (exists) {
    throw Error("Email already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ userName, email, password: hash });

  return user;
};

userSchema.statics.login = async function ({ email, password }) {
  if (!email || !password) {
    throw Error("Email and password must be filled");
  }
  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Email not recognised");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Invalid passowrd");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);

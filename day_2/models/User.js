const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    name: String,
    password: String,
    job: String
  },
  {
    timestamps: true,
  }
);



module.exports = model('User', userSchema);;
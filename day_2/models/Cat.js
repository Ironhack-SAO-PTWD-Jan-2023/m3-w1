const { Schema, model } = require('mongoose');

const catSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    enum: [ 'white', 'black', 'mixed', 'other' ]
  },
  age: {
    type: Number,
    min: 0,
    max: 30
  },
  avatarUrl: {
    type: String,
    default: 'https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png'
  },
  location: {
    address: String,
    city: String
  },
  countryCode: {
    type: String,
    match: /^[A-Z]{2}$/
  },
  created: {
    type: Date,
    default: Date.now
  }
})

/*
  String
  Number
  Date
  Boolean
  Schema.Types.ObjectId
  Schema.Types.Mixed
  Array, [] => [ String ]
*/

const Cat = model('Cat', catSchema);

// export default Cat;
module.exports = Cat;


// DB > coleções > documentos
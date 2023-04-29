const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: {
    type: [String, 'email deve ser uma string!'],
    required: [ true, 'email é obrigatório!' ]
  },
  username: {
    type: String,
    unique: true
  },
  avatarUrl: {
    type: String,
    default: 'https://digimedia.web.ua.pt/wp-content/uploads/2017/05/default-user-image.png'
  },
  linkedInProfile: {
    type: String,
    validate: {
      validator: (text) => {
        return text.indexOf('https://www.linkedin.com/') === 0;
      },
      message: 'linkedInProfile deve começar com "https://www.linkedin.com/"'
    }
  }
});

const User = model('UserExample', userSchema);

module.exports = User;
import mongoose from 'mongoose';

const User = new mongoose.Schema({
  name: {
    type: String,
  },

  lastname: {
    type: String,
  },

  email: {
    type: String,
  },

  password: {
    type: String,
  },

  location: {
    type: String,
  },

  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },

  avatar: {
    type: String,
  },

  avatarPublicID: {
    type: String,
  },
});

export default mongoose.model('User', User);

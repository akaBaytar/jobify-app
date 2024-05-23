import mongoose from 'mongoose';

const Job = new mongoose.Schema(
  {
    company: String,

    position: String,

    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },

    type: {
      type: String,
      enum: ['full-time', 'part-time', 'intership'],
      default: 'full-time',
    },

    location: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', Job);

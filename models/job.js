import mongoose from 'mongoose';

import { JOB_STATUS, JOB_TYPE } from '../constant/index.js';

const Job = new mongoose.Schema(
  {
    company: {
      type: String,
    },

    position: {
      type: String,
    },

    location: {
      type: String,
    },

    status: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: JOB_STATUS.PENDING,
    },

    type: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: JOB_TYPE.FULL_TIME,
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', Job);

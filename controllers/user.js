import { StatusCodes } from 'http-status-codes';

import Job from '../models/job.js';
import User from '../models/user.js';

// GET
// /api/v1/user/me
const getUser = async (req, res) => {
  const user = await User.findById(req.user.uid).select('-password');

  res.status(StatusCodes.OK).json({ user });
};

// PATCH
// /api/v1/user/update
const updateUser = async (req, res) => {
  const { uid } = req.user;

  const body = { ...req.body };
  delete body.password;

  await User.findByIdAndUpdate(uid, body);

  res.status(StatusCodes.OK).json({ msg: 'User updated successfully.' });
};

// GET
// /api/v1/admin/app-stats
const getAppStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();

  res.status(StatusCodes.OK).json({ users, jobs });
};

export { getUser, updateUser, getAppStats };

import cloudinary from 'cloudinary';
import { StatusCodes } from 'http-status-codes';

import Job from '../models/job.js';
import User from '../models/user.js';

import { formatImage } from '../middleware/multer.js';

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

  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);

    body.avatar = response.secure_url;
    body.avatarPublicID = response.public_id;
  }

  const user = await User.findByIdAndUpdate(uid, body);

  if (req.file && user.avatarPublicID) {
    await cloudinary.v2.uploader.destroy(user.avatarPublicID);
  }

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

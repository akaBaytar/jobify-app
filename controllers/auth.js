import { StatusCodes } from 'http-status-codes';

import User from '../models/user.js';
import { hashPassword, checkPassword, createJWT } from '../utilities/index.js';

import { Unauthorized } from '../error/index.js';

// POST
// /api/v1/auth/register
const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';

  const password = await hashPassword(req.body.password);
  req.body.password = password;

  await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: 'Registered successfully.' });
};

// POST
// /api/v1/auth/login
const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  const isCredentialsValid =
    user && (await checkPassword(req.body.password, user.password));

  if (!isCredentialsValid) throw new Unauthorized('Invalid credentials.');

  const token = createJWT({ uid: user._id, role: user.role });

  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
  });

  res.status(StatusCodes.OK).json({ msg: 'Logged in successfully.' });
};

// GET
// /api/v1/auth/logout
const logout = (req, res) => {
  res.cookie('token', '', { httpOnly: true, expires: new Date(Date.now()) });

  res.status(StatusCodes.OK).json({ msg: 'Logged out successfully.' });
};

export { register, login, logout };

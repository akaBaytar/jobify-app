import { StatusCodes } from 'http-status-codes';

import User from '../models/user.js';
import { hashPassword, checkPassword } from '../utilities/index.js';

import { Unauthorized } from '../error/Unauthorized.js';

const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';

  const password = await hashPassword(req.body.password);
  req.body.password = password;

  await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: 'Registered successfully.' });
};

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  const isCredentialsValid =
    user && (await checkPassword(req.body.password, user.password));

  if (!isCredentialsValid) throw new Unauthorized('Invalid credentials.');

  res.status(StatusCodes.OK).json({ msg: 'Logged in successfully.' });
};

export { register, login };

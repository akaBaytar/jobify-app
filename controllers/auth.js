import { StatusCodes } from 'http-status-codes';

import User from '../models/user.js';
import { hashPassword } from '../utilities/hashPassword.js';

const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? 'admin' : 'user';

  const password = await hashPassword(req.body.password);
  req.body.password = password;

  await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: 'Registered successfully.' });
};

const login = async (req, res) => {
  res.send('login');
};

export { register, login };

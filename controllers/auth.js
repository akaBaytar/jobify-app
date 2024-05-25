import { StatusCodes } from 'http-status-codes';
import User from '../models/user.js';

const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;

  req.body.role = isFirstAccount ? 'admin' : 'user';

  const user = await User.create(req.body);

  res.status(StatusCodes.CREATED).json({ user });
};

const login = async (req, res) => {
  res.send('login');
};

export { register, login };

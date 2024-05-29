import { Unauthorized, Forbidden, BadRequest } from '../error/index.js';
import { verifyJWT } from '../utilities/index.js';

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) throw new Unauthorized('Authentication failed.');

  try {
    const { uid, role } = verifyJWT(token);

    const demo = uid === '665726a02c9af233c9099632';

    req.user = { uid, role, demo };

    next();
  } catch (error) {
    throw new Unauthorized('Authentication failed.');
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new Forbidden('Forbidden - Not Authorized.');
    }

    next();
  };
};

export const demo = (req, res, next) => {
  if (req.user.demo)
    throw new BadRequest(
      'Demo user is for read only, please log in with your own account.'
    );

  next();
};

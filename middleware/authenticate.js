import { Unauthorized, Forbidden } from '../error/index.js';
import { verifyJWT } from '../utilities/index.js';

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) throw new Unauthorized('Authentication failed.');

  try {
    const { uid, role } = verifyJWT(token);

    req.user = { uid, role };

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

import { Router } from 'express';

import { getUser, updateUser, getAppStats } from '../controllers/user.js';

import { authorizePermissions, demo } from '../middleware/authenticate.js';
import { valideteUpdateUser } from '../middleware/validation.js';
import { upload } from '../middleware/multer.js';

const router = Router();

router.get('/me', getUser);

router.patch(
  '/update',
  demo,
  upload.single('avatar'),
  valideteUpdateUser,
  updateUser
);

router.get('/admin/app-stats', authorizePermissions('admin'), getAppStats);

export default router;

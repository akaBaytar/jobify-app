import { Router } from 'express';

import { getUser, updateUser, getAppStats } from '../controllers/user.js';
import { authorizePermissions } from '../middleware/authenticate.js';
import { valideteUpdateUser } from '../middleware/validation.js';

const router = Router();

router.get('/me', getUser);
router.patch('/update', valideteUpdateUser, updateUser);
router.get('/admin/app-stats', authorizePermissions('admin'), getAppStats);

export default router;
